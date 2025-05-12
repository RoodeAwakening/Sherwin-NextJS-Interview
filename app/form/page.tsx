'use client';
import { FormEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

function Form() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    });

    const router = useRouter();

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const params = new URLSearchParams(formData);
        router.push(`/success?${params}`);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div style={{ maxWidth: '400px', margin: '40px auto', padding: '20px' }}>
            <h1 style={{ textAlign: 'center', color: '#333', marginBottom: '20px' }}>Registration Form</h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            {['firstName', 'lastName', 'email'].map((field) => (
                <div key={field} style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <label htmlFor={field} style={{ fontWeight: 'bold' }}>
                    {field.charAt(0).toUpperCase() + field.slice(1)}:
                </label>
                <input
                    type={field === 'email' ? 'email' : 'text'}
                    id={field}
                    name={field}
                    value={formData[field as keyof typeof formData]}
                    onChange={handleChange}
                    required
                    style={{
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc'
                    }}
                />
                </div>
            ))}
            <button 
                type="submit"
                style={{
                padding: '10px',
                backgroundColor: '#0070f3',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                marginTop: '10px'
                }}
            >
                Submit
            </button>
            </form>
        </div>
    );
}

export default Form;
