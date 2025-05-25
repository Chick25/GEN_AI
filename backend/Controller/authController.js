const bcrypt = require ('bcrypt');
const User = require('../Models/User');

const register = (req, res) =>{
    const {firstname, lastname, email, password} = req.body;


    User.findByEmail(email, (err, results) => {
        if(err){
            console.error('Lỗi khi kiểm tra email: ', err.message);
            return res.status(500).json({message: 'Lỗi máy chủ'});
        }
        if(results.length > 0){
            return res.status(400).json({message: 'Email đã tồn tại'});

        }

        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if(err){
                console.error('Lỗi khi mã hóa mật khẩu: ', err.message);
                return res.status(500).json({message: 'Lỗi máy chủ'});
            }

            User.create(firstname, lastname, email, hashedPassword, (err, result)=>{
                if(err){
                    console.log('Lỗi khi lưu người dùng: ', err.message);
                    return res.status(500).json({message: 'Lỗi máy chủ'});

                }
                res.status(201).json({message: 'Đăng ký thành công', userID: result.insertId});
            });

        });


    });
};

const login = (req, res) =>{
    const {email, password} = req.body;

    User.findByEmail(email, (err, results)=>{
        if(err){
            console.err('Lỗi khi kiểm tra email:', err.message);
            return res.status(500).json({message: 'Lỗi máy chủ'});
        }
        if(results.length === 0){
            return res.status(400).json({message: 'Email hoặc mật khẩu không đúng'});
        }

        const user = results[0];

        bcrypt.compare(password, user.password, (err, isMatch)=>{
            if(err){
                console.err('Lỗi khi kiểm tra mật khẩu: ', err.message);
                return res.status(500).json({message: 'Lỗi máy chủ'});
            }
            if(!isMatch){
                return res.status(400).json({message: 'Email hoặc mật khẩu không đúng'});
            }
            // res.json(201).json({message:'Đăng nhập thành công', user: {id:user.id, email:user.email}});

            return res.status(201).json({
                message: 'Đăng nhập thành công',
                user:{
                    id: user.id,
                    email: user.email
                }
            });

        });

    });
};


module.exports ={register, login};

