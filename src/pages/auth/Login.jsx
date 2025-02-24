import { useContext, useState} from "react";
import { MdMonitor } from "react-icons/md";
import { motion } from "framer-motion";
import { AuthContext } from "../../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(email, password);
      navigate("/laptop");
    } catch (err) {
      setError(err);
    }
  };
  
  return (
    <div className="h-screen w-full flex flex-col gap-10 justify-center items-center relative overflow-hidden bg-[#1a1d21]">
      <motion.div
        className="absolute inset-0 opacity-30 z-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 0.3,
        }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#212529] via-[#383b40] to-[#1a1d21]"></div>
        <motion.div 
          className="absolute -top-[40%] -left-[20%] w-[70%] h-[70%] rounded-full bg-[#E3B951]/20 blur-[120px]"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }} 
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute top-[60%] -right-[10%] w-[50%] h-[50%] rounded-full bg-[#E3B951]/10 blur-[100px]"
          animate={{
            x: [0, -30, 0],
            y: [0, -40, 0],
          }} 
          transition={{
            duration: 18,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </motion.div>

      {/* Logo header with entrance animation */}
      <motion.header 
        className="flex items-center gap-2 text-white text-4xl font-bold z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 20,
          delay: 0.2
        }}
      >
        <motion.div
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
        >
          <MdMonitor size={38} className="text-[#E3B951]" />
        </motion.div>
        <span>Deskify</span>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </motion.header>
      
      {/* Login form with entrance animation */}
      <motion.div 
        className="bg-[#212529] p-8 rounded-md w-96 border border-[#E3B951] shadow-lg shadow-[#E3B951]/10 z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ 
          type: "spring",
          stiffness: 300,
          damping: 25,
          delay: 0.4
        }}
      >
        <form className="space-y-6 text-white" onSubmit={handleLogin}>
          <div className="space-y-2">
            <motion.h2 
              className="text-xl font-semibold text-center mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Sign in
            </motion.h2>
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <input
                type="email"
                placeholder="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 bg-[#383b40] border-2 border-[#E3B951]/70 rounded-md focus:border-[#E3B951] focus:outline-none transition-colors duration-200"
              />
            </motion.div>
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-[#383b40] border-2 border-[#E3B951]/70 rounded-md focus:border-[#E3B951] focus:outline-none transition-colors duration-200"
              />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <motion.button 
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="w-full bg-[#E3B951] p-2 rounded-md text-black font-bold transition-all duration-200 hover:bg-[#E3B951]/90"
            >
              Login
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="text-center text-sm text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;