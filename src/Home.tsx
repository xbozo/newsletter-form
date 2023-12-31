import { useState } from 'react';
import { Success } from './Success';
import IconList from './assets/images/icon-list.svg';
import SignUpImage from './assets/images/illustration-sign-up-desktop.svg';

export const Home = () => {
  const [email, setEmail] = useState<string>();
  const [renderSuccess, setRenderSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email !== '' && email !== undefined) {
      setRenderSuccess(true);
    } else {
      alert('Preencha todos os dados.');
    }
  };

  const handleDismiss = () => {
    setRenderSuccess(false);
    setEmail('');
  };

  return (
    <div className="w-screen h-screen bg-charcoal">
      <div className="container h-full max-h-full mx-auto flex justify-center items-center">
        <div className="bg-white rounded-lg p-5">
          <div className="flex gap-10">
            {!renderSuccess && (
              <>
                <div className="flex flex-col justify-center gap-4 flex-1 pl-5 text-dark_grey">
                  <h1 className="font-bold text-5xl leading-normal">
                    Stay Updated!
                  </h1>
                  <p className="">
                    Join 60,000+ product managers receiving monthly updates on:
                  </p>
                  <div className="flex flex-col gap-2 mt-4">
                    <span className="inline-flex gap-2 ">
                      <img src={IconList} />
                      Product discovery and building what matters
                    </span>
                    <span className="inline-flex gap-2 ">
                      <img src={IconList} />
                      Measuring to ensure updates are a success
                    </span>
                    <span className="inline-flex gap-2 ">
                      <img src={IconList} />
                      And much more!
                    </span>
                  </div>

                  <form
                    action="post"
                    className="mt-4 flex flex-col gap-2"
                    onSubmit={(e) => handleSubmit(e)}
                  >
                    <label className="text-sm font-bold">Email address</label>
                    <input
                      type="email"
                      placeholder="email@company.com"
                      className="p-4 rounded-lg border border-gray-300 outline-dark_grey placeholder:text-grey"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <button
                      type="submit"
                      className=" bg-dark_grey text-white text-center p-4 rounded-lg mt-4 
                        hover:bg-gradient-to-r from-rose-500 to-primary 
                      "
                    >
                      Subscribe to monthly newsletter
                    </button>
                  </form>
                </div>
                <img src={SignUpImage} alt="" />
              </>
            )}
          </div>
          {renderSuccess && (
            <>
              <Success email={email!} returnFn={handleDismiss} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};
