import Bredcumb from "@/app/_components/page_components/Bredcumb";

export const metadata = {
  title: "Synergy | Transactions",
  description: "Your Strategic Partner for Business Excellence",
};

// const content = [
//   {
//     title: `Term Loan`,
//     content: "AED 40 Million for Equity release in labor Accommodation",
//     url: "#",
//     img: "/img/transaction1.png",
//   },
//   {
//     title: `Working Capital`,
//     content: "AED 75 Million For Medical Engineering Company in Dubai",
//     url: "#",
//     img: "/img/transaction2.png",
//   },
//   {
//     title: `Export Loan`,
//     content: "AED 50 Million For a trading company in Dubai",
//     url: "#",
//     img: "/img/transaction3.png",
//   },
//   {
//     title: `Structured Trade Finance`,
//     content: "USD 12 Million For a trading company",
//     url: "#",
//     img: "/img/transaction4.png",
//   },
//   {
//     title: `Project Finance`,
//     content: "AED 60 Million For Construction Company",
//     url: "#",
//     img: "/img/transaction5.png",
//   },
//   {
//     title: `Asset Finance`,
//     content: "AED 100 Million For investment in residential building",
//     url: "#",
//     img: "/img/transaction6.png",
//   },
//   {
//     title: `Acquisition`,
//     content: "AED 28 Million For Medical Clinics",
//     url: "#",
//     img: "/img/transaction7.png",
//   },
//   {
//     title: `Business Loan`,
//     content: "AED 2.5 Million For SME",
//     url: "#",
//     img: "/img/transaction8.png",
//   },
//   {
//     title: `Islamic Finance`,
//     content: "AED 25 Million For buying a warehouse",
//     url: "#",
//     img: "/img/transaction9.png",
//   },
//   {
//     title: `Invoice Discounting`,
//     content: "AED 4 Million For a trading company in Dubai",
//     url: "#",
//     img: "/img/transaction10.png",
//   },
// ];

// const data = {
//   meta_data: {
//     title: "Transactions",
//     description: "Your Strategic Partner for Business Excellence",
//     image: "img/transaction_banner.jpg",
//     heading: "Transactions",
//   },
// };

export default async function PageTransactions() {
  let APIURL = process.env.NEXT_PUBLIC_API_BASE_URL;
  const { data } = await fetch(`${APIURL}/cms/pages/transactions`, {
    cache: "no-store",
  }).then((res) => res.json());
  const transactionsResult = await fetch(`${APIURL}/cms/getAll/Transactions`, {
    cache: "no-store",
  }).then((res) => res.json());
  const transactions = transactionsResult.data;

  return (
    <>
      <section className={`banner-section`}>
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
                        className="wow fadeInUp"
                        data-animation="fadeInUp"
                        data-delay="1s"
                        dangerouslySetInnerHTML={{
                          __html: data?.meta_data?.heading?.replace(
                            /<\/?p>/g,
                            ""
                          ),
                        }}
                      ></h1>
                    </div>
                    <Bredcumb title={data?.meta_data?.title} />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-lg-12 col-md-12">
                  <div className="inner-banner-img wow fadeInDown">
                    {data?.image != "" && (
                      <img
                        src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${data?.meta_data?.image}`}
                        alt={data?.meta_data?.title}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="inner-content-section section-gap csr_page wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="1000ms"
      >
        <div className="container transactions-section">
          <div className="wrapper">
            {transactions.map((item, index) => (
              <div
                className="card-item wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="1000ms"
                key={item}
              >
                <div className="card-img">
                  <img
                    src={`${process.env.NEXT_PUBLIC_MEDIA_URL}/${item.image}`}
                    alt=""
                  />
                </div>
                <div className="card-content">
                  <div>
                    <div className="title">{item.title}</div>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={{
                        __html: item.content,
                      }}
                    ></div>
                  </div>
                  <a
                    target="_blank"
                    className="button"
                    href={item.contact_link}
                  >
                    Contact now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <Testimonials />  */}
    </>
  );
}
