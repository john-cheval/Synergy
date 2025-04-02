import Bredcumb from "@/app/_components/page_components/Bredcumb";


export const metadata = {
  title: "Synergy | Services",
  description: "Your Strategic Partner for Business Excellence",
};

export default async function PageBlogDetails({ params }) {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { data } = await fetch(`${APIURL}/cms/getBySlug/${params.slug}`, {cache: 'no-store' }).then(
    (res) => res.json()
  );

  return (
    <>
      <title>{data?.meta_data?.blog_title}</title>
      {/* <!--====== Banner part start ======--> */}
      <section className="banner-section wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="500ms">
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
                        {data?.meta_data?.blog_title}
                      </h1>
                    </div>
                    <Bredcumb title="Blog"/>
                  </div>
                </div>

                
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12">
                  <div className="inner-banner-img">
                    <img
                      src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${data?.meta_data?.image}`}
                      alt={data?.meta_data.blog_title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Banner part end ======--> */}
      {/* <!--====== Feature Part start ======--> */}
      <section className="blog-section section-gap ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="blog-details-content">
                <div className="blog-content wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="1500ms" >
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.meta_data?.content,
                    }}
                  ></div>
                  <div className="wow fadeInUp mt-4" data-wow-duration="1500ms" data-wow-delay="1000ms">
                  <h3> Contact Us </h3>

                  <div className="blog-contact-col" >
                    <ul>
                      <li className="actives">                        
                        <a href="tel:+97145139095">Call: +971 4 5139095 </a>
                      </li>
                      <li>
                        
                       <a target="_blank" href="https://wa.me/+971522215052?text=hello"> Whatsapp: +971 52 2215052 </a>
                      </li>
                      <li>
                        
                        <a target="_blank" href="mailto:info@consultsynergy.ae"> Email: info@consultsynergy.ae </a>
                      </li>
                    </ul>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--====== Feature Part end ======--> */}
    </>
  );
}
