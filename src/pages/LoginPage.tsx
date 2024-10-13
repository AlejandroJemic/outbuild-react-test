import React, { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';


const LoginPage: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleSbmit = (e: FormEvent) => {
        e.preventDefault();
        if (email === 'prologin@prologin.com' && password === 'ProLogin123456') {
            sessionStorage.setItem('isLogged', 'true');
            navigate('/dashboard');
        }
        else {
            setError('Invalid email or password')
        }
    };

    return (
        <div className="login-page">
            <form onSubmit={handleSbmit}>
                <h3>ProLogin</h3>
                <div className="login-form">
                    <label>Email</label>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        required />
                    <label>Password</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        required />
                    <button type="submit">Login</button>
                    {error && <span>{error}</span>}
                </div>
            </form>
        </div>
    );
}

export default LoginPage;