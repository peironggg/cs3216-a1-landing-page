import React from 'react';
import HomeBg from '../images/home_page.png';

function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-stayexchange rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            <div className="absolute right-0 top-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <img className="md:max-w-none mx-auto rounded" src={HomeBg} width="428" height="328" alt="Features bg" />
            </div>

            <div className="relative flex flex-col lg:flex-row justify-between items-center">

              {/* CTA content */}
              <div className="text-center lg:text-left lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Be the first to know when we launch</h3>
                <p className="text-gray-200 text-lg mb-6">Stay Exchange will initially only be available to those who subscribe below.</p>

                {/* CTA form */}
                <form className="w-full lg:w-auto">
                  <div className="flex flex-col sm:flex-row justify-center lg:mx-0">
                    <input type="email" className="form-input w-full appearance-none bg-white-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" />
                    <button className="btn text-black bg-gray-300" href="#0">Subscribe</button>
                  </div>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  {/* <p className="text-sm text-gray-400 mt-3">7 days free trial. No credit card required.</p> */}
                </form>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Newsletter;
