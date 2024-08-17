
// eslint-disable-next-line react/prop-types
export default function TextHeader({ children, classes }) {
    return (
        <div className={`${classes ? classes: ''} text-[4rem] font-poppins not-italic font-[700]`}>
            { children }
        </div>
    );
}
