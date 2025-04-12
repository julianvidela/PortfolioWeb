import "./gradientText.css";

interface GradientTextProps {
    text: string;
    animated?: boolean; 
}

const GradientText: React.FC<GradientTextProps> = ({ text, animated = false }) => {
    return (
        <h1 className={`gradient-text ${animated ? 'gradient-text_anim' : ''}`}>
            {text}
        </h1>
    );
};

export default GradientText;
