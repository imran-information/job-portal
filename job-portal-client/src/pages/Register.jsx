import React, { useContext, useState } from 'react';
import AuthContext from '../context/AuthContext/AuthContext';

const Register = () => {
    const { createUser } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        // Regular Expression Patterns
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // Minimum 8 characters, at least one letter and one number
        const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

        // Name validation (empty check)
        if (!formData.name.trim()) {
            newErrors.name = "Name is required.";
        }

        // Email validation
        if (!emailPattern.test(formData.email)) {
            newErrors.email = "Please enter a valid email.";
        }

        // Password validation
        if (!passwordPattern.test(formData.password)) {
            newErrors.password =
                "Password must be at least 8 characters long, with at least one letter and one number.";
        }

        // Confirm Password validation
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
        }

        // If there are errors, update state
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If validation passes, process form data
        // console.log(formData);
        createUser(formData.email, formData.confirmPassword)
            .then((result) => {
                console.log(result.user);
                setErrors({})
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                });
            }).catch((err) => {
                setErrors({ general: err?.message });
            });
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="you@example.com"
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password}</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="Confirm Password"
                            className="w-full mt-1 p-2 border border-gray-300 rounded"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
