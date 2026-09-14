import "./DroneButton.css";

function DroneButton({ demoRef, isSubmitting }) {
  return (
    <button
      ref={demoRef}
      type="submit"
      disabled={isSubmitting}
      className="demo"
    >
      {/* ================= DRONE ================= */}

      <div className="demo__drone-cont demo__drone-cont--takeoff">
        <div className="demo__drone-cont demo__drone-cont--shift-x">
          <div className="demo__drone-cont demo__drone-cont--landing">

            <svg
              viewBox="0 0 136 112"
              className="demo__drone"
            >
              <g className="demo__drone-leaving">

                <path
                  className="demo__drone-arm"
                  d="M52,46 c0,0 -15,5 -15,20 l15,10"
                />

                <path
                  className="demo__drone-arm demo__drone-arm--2"
                  d="M52,46 c0,0 -15,5 -15,20 l15,10"
                />

                <path
                  className="demo__drone-yellow"
                  d="M28,36 l20,0 a20,9 0,0,1 40,0 l20,0 l0,8 c-10,0 -15,0 -23,10 l-14,0 c-10,-10 -15,-10 -23,-10 l-10,0z"
                />

                <path
                  className="demo__drone-green"
                  d="M16,12 a10,10 0,0,1 20,0 l-10,50z"
                />

                <path
                  className="demo__drone-green"
                  d="M100,12 a10,10 0,0,1 20,0 l-10,50z"
                />

                <path
                  className="demo__drone-yellow"
                  d="M9,8 l34,0 a8,8 0,0,1 0,16 l-34,0 a8,8 0,0,1 0,-16z"
                />

                <path
                  className="demo__drone-yellow"
                  d="M93,8 l34,0 a8,8 0,0,1 0,16 l-34,0 a8,8 0,0,1 0,-16z"
                />

              </g>

              {/* Package carried by drone */}

              <path
                className="demo__drone-package demo__drone-green"
                d="M50,70 l36,0 l-4,45 l-28,0z"
              />

            </svg>

          </div>
        </div>
      </div>

      {/* ================= CIRCLE ================= */}

      <div className="demo__circle">

        <div className="demo__circle-inner">

          <svg
            viewBox="0 0 16 20"
            className="demo__circle-package"
          >
            <path d="M0,0 16,0 13,20 3,20z" />
          </svg>

          <div className="demo__circle-grabbers"></div>

        </div>

        {/* Progress circle */}

        <svg
          viewBox="0 0 40 40"
          className="demo__circle-progress"
        >
          <path
            className="demo__circle-progress-line"
            d="M20,0 a20,20 0 0,1 0,40 a20,20 0 0,1 0,-40"
          />

          <path
            className="demo__circle-progress-checkmark"
            d="M14,19 19,24 29,14"
          />
        </svg>

      </div>

      {/* ================= TEXT ================= */}

      <div className="demo__text-fields">

        {/* Step 0 */}

        <div className="demo__text demo__text--step-0">
          Send Message
        </div>

        {/* Step 1 */}

        <div className="demo__text demo__text--step-1">
          Processing
          <span className="demo__text-dots">
            <span>.</span>
          </span>
        </div>

        {/* Step 2 */}

        <div className="demo__text demo__text--step-2">
          Delivering
          <span className="demo__text-dots">
            <span>.</span>
          </span>
        </div>

        {/* Step 3 */}

        <div className="demo__text demo__text--step-3">
          It's on the way
        </div>

        {/* Step 4 */}

        <div className="demo__text demo__text--step-4">
          Delivered
        </div>

      </div>

      {/* ================= REVERT LINE ================= */}

      <div className="demo__revert-line"></div>

    </button>
  );
}

export default DroneButton;