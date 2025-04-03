const OurProcess = ({ data }) => {
  const { our_process_description, our_process_heading, our_process_list } =
    data;

  return (
    <>
      <section className="Process-section section-gap">
        <div className="container">
          <div className="row justify-content-center">
            <div
              className="col-lg-4 col-md-12 text-left wow fadeInUp stickyLeftDesktop"
              data-wow-duration="1500ms"
              data-wow-delay="1000ms"
            >
              <div className="skill-text">
                <div className="section-title mb-40 left-border">
                  <h2
                    className="title mb-3"
                    // dangerouslySetInnerHTML={{
                    //   __html: our_process_heading,
                    // }}
                  >
                    <p>
                      Our <br />
                      <span class="color-text">Process&nbsp;</span>
                    </p>
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: our_process_description,
                    }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-12">
              {our_process_list &&
                our_process_list.length > 0 &&
                our_process_list.map((item, index) => {
                  return (
                    <div
                      key={item.id}
                      className="Process-list-col wow fadeInUp"
                      data-wow-duration="1500ms"
                      data-wow-delay={`${index * 200}ms`}
                    >
                      <div className="Process-list-number">
                        <h5> {index <= 9 ? `0` + (index + 1) : index + 1} </h5>
                      </div>
                      <div className="Process-list-title">
                        <h4>{item?.title}</h4>
                      </div>
                      <div
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                        className="Process-list-number"
                      ></div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurProcess;
