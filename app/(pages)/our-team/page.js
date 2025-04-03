import Teams from "@/app/_components/page_components/Teams";
import Bredcumb from "@/app/_components/page_components/Bredcumb";

export const metadata = {
  title: "Synergy | Our Team",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PageAboutUs() {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { post_title, short_description, team_list } = await fetch(
    `${APIURL}/full_details?ID=150`,
    {
      cache: "no-store",
    }
  ).then((res) => res.json());

  return (
    <>
      <section className={`banner-section  team-banner-section wow fadeInUp`}>
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
                      <h1
                        data-animation="fadeInUp"
                        data-delay="1s"
                        // dangerouslySetInnerHTML={{
                        //   __html: data.meta_data?.heading.replace(
                        //     /<\/?p>/g,
                        //     ""
                        //   ),
                        // }}
                      >
                        {post_title}
                      </h1>
                      {short_description != "" && (
                        <p
                        // dangerouslySetInnerHTML={{
                        //   __html: data.meta_data?.description.replace(
                        //     /<\/?p>/g,
                        //     ""
                        //   ),
                        // }}
                        >
                          {short_description}
                        </p>
                      )}
                    </div>
                    <Bredcumb title={post_title} />
                  </div>
                </div>

                {/* <div className="col-lg-3 col-md-3 text-right">
                  <div className="bredcumb">
                    <ul>
                      <li>
                        {" "}
                        <a href="/"> Home </a>
                      </li>
                      <li> - </li>
                      <li> {data.meta_data?.title} </li>
                    </ul>
                  </div>
                </div> */}
              </div>

              <div className="row justify-content-center align-items-center">
                {/* <div className="col-lg-12 col-md-12">
                  {data.meta_data?.image != "" && (
                    <div className="inner-banner-img">
                      <img
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${data.meta_data?.image}`}
                        alt={data.meta_data?.title}
                      />
                    </div>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--====== Feature Part start ======--> */}
      <Teams />
      {/* <!--====== Feature Part end ======--> */}
    </>
  );
}
