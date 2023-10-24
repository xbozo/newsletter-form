import SuccessIcon from './assets/images/icon-success.svg';

type Props = {
  email: string;
  returnFn: () => void;
};

export const Success = ({ email, returnFn }: Props) => {
  return (
    <div className="flex flex-col justify-center gap-7 text-dark_grey p-4 rounded-xl w-96">
      <img src={SuccessIcon} alt="" className="h-14 w-14" />

      <h1 className="text-5xl font-bold">Thanks for subscribing!</h1>

      <p className="break-words flex-wrap">
        A confirmation email has been sent to <strong>{email}</strong>. Please
        open it and click the button inside to confirm your subscription.
      </p>

      <button
        className=" bg-dark_grey text-white text-center p-4 rounded-lg mt-4 
          hover:bg-gradient-to-r from-rose-500 to-primary 
        "
        onClick={returnFn}
      >
        Dismiss message
      </button>
    </div>
  );
};
