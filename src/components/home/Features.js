import React from "react";

const Features = () => (
  <div>
    <section className="features section">
      <div className="container">
        <div className="features-inner section-inner">
          <div className="features-header text-center">
            <div className="container-sm">
              <h2 className="section-title mt-0">How it works</h2>
              <p className="section-paragraph">
                We want to give you back time by minimizing the time you use
                getting updates from team members and create synthesis based on
                these inputs.
              </p>
            </div>
          </div>
          <div className="features-wrap">
            <div className="feature text-center">
              <div className="feature-inner">
                <div className="feature-icon" style={{ background: "#FFD2DA" }}>
                  <svg
                    width="88"
                    height="88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="nonzero">
                      <path
                        d="M54 56h-9a2 2 0 0 1-2-2V43a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2zm-9-13v10h9V43h-9z"
                        fill="#FCAC96"
                      />
                      <path
                        d="M41 50h-7V34h14v5h2v-5a2 2 0 0 0-2-2H34a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h7v-4z"
                        fill="#FC8464"
                      />
                    </g>
                  </svg>
                </div>
                <h4 className="feature-title h3-mobile mb-8">Notification</h4>
                <p className="text-sm">
                  At the end of each day your team members gets a notification
                  to log their daily task
                </p>
              </div>
            </div>
            <div className="feature text-center">
              <div className="feature-inner">
                <div className="feature-icon" style={{ background: "#FFD8CD" }}>
                  <svg
                    width="88"
                    height="88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="nonzero">
                      <path
                        d="M41 42h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1zM41 55h-7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1z"
                        fill="#4950F6"
                      />
                      <path
                        fill="#8D92FA"
                        d="M45 34h10v2H45zM45 39h10v2H45zM45 47h10v2H45zM45 52h10v2H45z"
                      />
                    </g>
                  </svg>
                </div>
                <h4 className="feature-title h3-mobile mb-8">Seamless</h4>
                <p className="text-sm">
                  Instead of wasting time explaining your activity in a meeting
                  or on writing, automatically drag in activities based on your
                  history.
                </p>
              </div>
            </div>
            <div className="feature text-center">
              <div className="feature-inner">
                <div className="feature-icon" style={{ background: "#C6FDF3" }}>
                  <svg
                    width="88"
                    height="88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="nonzero">
                      <path
                        d="M43 47v7a13 13 0 0 0 13-13v-7c-7.18 0-13 5.82-13 13z"
                        fill="#FF6381"
                      />
                      <path
                        d="M32 41v4a9 9 0 0 0 9 9v-4a9 9 0 0 0-9-9z"
                        fill="#FF97AA"
                      />
                    </g>
                  </svg>
                </div>
                <h4 className="feature-title h3-mobile mb-8">
                  Create synthesis
                </h4>
                <p className="text-sm">
                  Every morning the team gets a notification showing the entire
                  teams tasks done to create alignment
                </p>
              </div>
            </div>
            <div className="feature text-center">
              <div className="feature-inner">
                <div className="feature-icon" style={{ background: "#E0E1FE" }}>
                  <svg
                    width="88"
                    height="88"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g fill="none" fillRule="nonzero">
                      <circle fill="#1ADAB7" cx="38" cy="50" r="5" />
                      <path
                        d="M53 42h2v-8a1 1 0 0 0-1-1h-8v2h5.586l-8.293 8.293a1 1 0 1 0 1.414 1.414L53 36.414V42z"
                        fill="#1ADAB7"
                      />
                      <path
                        fill="#83F0DD"
                        d="M34 41.414l3-3 3 3L41.414 40l-3-3 3-3L40 32.586l-3 3-3-3L32.586 34l3 3-3 3zM55.414 48L54 46.586l-3 3-3-3L46.586 48l3 3-3 3L48 55.414l3-3 3 3L55.414 54l-3-3z"
                      />
                    </g>
                  </svg>
                </div>
                <h4 className="feature-title h3-mobile mb-8">
                  Generate reports
                </h4>
                <p className="text-sm">
                  As a manager of multiple projects, quickly get an overview of
                  your teams tasks and generate reports for management
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Features;
