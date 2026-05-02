// src/components/Button.tsx

interface ButtonProps {
    label: string;
    onClick: () => void;
    variant?: 'primary' | 'secondary'| 'danger';
    disabled?: boolean;
}

const Button = ({ label, onClick, variant = 'primary', disabled = false }: ButtonProps) => {

    const styles = {
        primary: 'bg-blue-500 hover:bg-blue-600 text-white',
        secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800',
        danger: 'bg-red-500 hover:bg-red-600 text-white',
    }

    return (
        <button
            onClick={onClick}
            disabled={disabled}

            className={`
                px-4 py-2 rounded-lg font-medium Transition
                ${styles[variant]}
                 ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            `}
        >
            {label}
        </button>
    )
}

export default Button;