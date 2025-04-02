import Link from "next/link";
import JobItem from "@/app/_components/page_components/JobItem";
import Bredcumb from "@/app/_components/page_components/Bredcumb";

export const metadata = {
  title: "Synergy | Career",
  description: "Your Strategic Partner for Business Excellence",
};
export const dynamic = 'force-dynamic'
export default async function PageCareer({ params }) {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { data } = await fetch(`${APIURL}/cms/pages/careers`, {cache: 'no-store' }).then((res) =>
    res.json()
  );
  const jobsResult = await fetch(`${APIURL}/cms/getAll/Jobs`, {cache: 'no-store' }).then((res) =>
    res.json()
  );
  const jobs = jobsResult.data; 

  return (
    <>
      <section className="banner-section wow fadeInUp">
        <div className="inner-banner">
          <div className="inner-banner-bg">
            <img src="/img/inner-banner.png" />
          </div>
          <div className="single-banner">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12 text-left">
                  <div className="inner-banner-content">
                    <div className="h_w">  
                      <h1 data-animation="fadeInUp" data-delay="1s">
                        Careers
                      </h1>
                    </div>
                    <Bredcumb title="Careers"/>
                  </div>
                </div>

                {/* <div className="col-lg-3 col-md-3 text-right">
                  <div className="bredcumb">
                    <ul>
                      <li>
                        <a href="/"> Home </a>
                      </li>
                      <li> - </li>
                      <li> Careers </li>
                    </ul>
                  </div>
                </div> */}
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12">
                  <div className="inner-banner-img">
                    <img
                      src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${data?.meta_data?.image}`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="inner-content-section section-gap wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4">
              <div className="inner-content-title">
                <h5> Explore opportunities </h5>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="inner-content-box"
                dangerouslySetInnerHTML={{
                  __html: data?.meta_data?.description,
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
      <section className="careers-section">
        <div className="container">
            {jobs.length == 0 && <h4>No jobs available at this moment!</h4>}
          {jobs.length > 0 &&
            jobs.map((item) => {
              return <JobItem key={item.id} data={item} />;
            })}
        </div>
      </section>
    </>
  );
}
