import React from "react";
import { Link } from "react-router-dom";
import ROUTE_PATHS from "../routes/paths";

const SignUpForNewsLetter = () => {
  return (
    <article className="supportNewsLetterSec__wr text-center">
      <div className="container w_lg_max_1600px__wr w_md_max_100_per__wr px_lg_112px__wr">
        <div className="content__wr supportNewsLetterContent__wr">
          <h2 className="secTitle__wr supportNewsLetterTitle__wr">
            Sign up for our newsletter
          </h2>
          <p>
            Be the first to know about new Healing Session, Workshops, Courses
            and Practitioners
          </p>
        </div>
        <div className="newsLetterFormBlock__wr supportNewsLetterFormBlock__wr">
          <form action="">
            <div className="input-group newsLetterInputGroup__wr supportNewsLetterInputGroup__wr">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your email"
                aria-label="Enter your email"
                aria-describedby="newsLetterFormBlock"
              />
              <button
                className="btn btn-primary primaryBtn__wr btnGreen300__wr rounded_22px__wr"
                type="button"
              >
                <span className="labelText__wr">Subscribe</span>
              </button>
            </div>
            <small className="form-text">
              We care about your data in our{" "}
              <Link
                to={`${ROUTE_PATHS.HEELAR_PUBLIC}${ROUTE_PATHS.HEELAR_PUBLIC_PRIVACY_POLICY}`}
              >
                privacy policy
              </Link>
              .
            </small>
          </form>
        </div>
      </div>
    </article>
  );
};

export default SignUpForNewsLetter;
