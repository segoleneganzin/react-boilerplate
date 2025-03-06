interface I_CtaProps {
  handleClick: () => void;
  classname?: string;
  content: string | React.ReactNode;
  ariaLabel?: string;
}
const Cta: React.FC<I_CtaProps> = ({
  handleClick,
  classname,
  content,
  ariaLabel = '',
}) => {
  return (
    <>
      <button
        className={`cta bold ${classname}`}
        onClick={handleClick}
        aria-label={ariaLabel}
      >
        {content}
        <div className='cta__blobs'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
    </>
  );
};

export default Cta;
