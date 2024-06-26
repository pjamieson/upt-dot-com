import React from "react"
import { graphql } from "gatsby"

import { MDBCard, MDBCardBody } from "mdb-react-ui-kit"

import Layout from "../../components/layout"
import CardImageCaptionLink from "../../components/card-image-caption-link"

import tippa0 from "../../images/Gossen/1948 Gossen Tippa 400.webp"
import tippa1 from "../../images/Gossen/1949 Gossen Tippa 400.jpg"
import tippa2a from "../../images/Gossen/1952 Gossen Tippa 400.jpg"
import tippa2b from "../../images/Gossen/1953 Gossen Tippa 400.jpg"
import tippa3 from "../../images/Gossen/1953 Gossen Tippa B 400.jpg"
import tippa4 from "../../images/Gossen/Placeholder 400.png"
import tippa5 from "../../images/Gossen/1964 Adler Tippa 1 400.jpg"
import tippa6 from "../../images/Gossen/1968 Adler Tippa S 400.jpg"
import tippa7 from "../../images/Gossen/1977 Adler Tippa S 400.webp"
import tippa20 from "../../images/Gossen/Tippa Hermes Det4 400.jpg"
import tippa21 from "../../images/Gossen/Tippa Hermes Top Full 400.jpg"
import tippa22 from "../../images/Gossen/Tippa Hermes Case Full1 400.jpg"
import tippa23 from "../../images/Gossen/Tippa Hermes Front1 400.jpg"
import tippa24 from "../../images/Gossen/Tippa Hermes Back2 400.jpg"
import tippa25 from "../../images/Gossen/Tippa Hermes Case Det1 400.jpg"
import tippa26a from "../../images/Gossen/1950 Gossen Tippa cn 400.png"
import tippa26b from "../../images/Gossen/1950 Gossen Tippa sn 400.png"
import tippa26c from "../../images/Gossen/1952 Gossen Tippa sn 400.jpg"
import tippa28 from "../../images/Gossen/Gossen Tippa Briefcase0 400.jpg"
import tippa29 from "../../images/Gossen/Gossen Tippa Briefcase1 400.jpg"
import tippa30 from "../../images/Gossen/GossenSuperPilot 400.jpg"

const GromaPage = ({ data }) => {
  const {
    allStrapiTypewriter: { nodes: typewriters },
  } = data
  //console.log("index.js typewriters", typewriters)

  return (
   <Layout>
      <div className="container page-container">
        <h1>Groma Typewriters - Portables & Ultraportables</h1>

<section className="brand-story">
  <div className="historical-images">
    <div className="image-container">
      <img className="card" src={tippa0} alt="1948 Gossen Tippa typewriter" />
    </div>
    <p>1948 Gossen Tippa (Model A Mk. I) with Maroon color shell and lid</p>
    <div className="image-container">
      <img className="card" src={tippa1} alt="1949 Gossen Tippa typewriter" />
    </div>
    <p>1949 Gossen Tippa (Model A Mk. I) with Ivory color shell and lid</p>
    <div className="image-container">
      <img className="card" src={tippa2a} alt="1952 Gossen Tippa typewriter" />
    </div>
    <p>1952 Gossen Tippa (Model A Mk. II) with Sand color shell and lid</p>
    <div className="image-container">
      <img className="card" src={tippa2b} alt="1953 Gossen Tippa typewriter" />
    </div>
    <p>1953 Gossen Tippa (Late Model A Mk. II) with Black color shell and lid</p>
    <div className="image-container">
      <img className="card" src={tippa3} alt="1953 Gossen Tippa B typewriter" />
    </div>
    <p>1953 Gossen Tippa B with Gray color shell and lid</p>
    <div className="image-container">
      <img className="card" src={tippa4} alt="Gossen Tippa Pilot typewriter" />
    </div>
    <p>Gossen Tippa Pilot</p>
    <div className="image-container">
      <img className="card" src={tippa5} alt="Adler Tippa 1 typewriter" />
    </div>
    <p>1964 Adler Tippa 1</p>
    <div className="image-container">
      <img className="card" src={tippa6} alt="1968 Adler Tippa S typewriter" />
    </div>
    <p>1968 Adler Tippa S</p>
    <div className="image-container">
      <img className="card" src={tippa7} alt="1968 Adler Tippa S typewriter" />
    </div>
    <p>1977 Adler Tippa S</p>
  </div>
  <div className="historical-text">
    <h2>A Brief History of Maschinenfabrik G.F.Grosser and their Groma Portable Typewriters</h2>

    <p className="subhead">With a glance at Adler and Triumph Tippas</p>

    <p>The company P. Gossen & Co. K.-G was founded in Germany in 1919 by Paul Gossen, a 46-year-old engineer. The new firm set about manufacturing and selling electrical measuring instruments. An early product—called the <em>Millivoltmeter</em>—was the first device offered for measuring voltage in the millivolt range. The company was successful, and expanded through the 1920s and 1930s. However, from 1939 into 1945—during World War II—the company was required to dedicate themselves to the provision of electrical instruments needed by the German armed forces.</p>

    Gustav Friedrich Grosser's sewing machine company (founded 1872). Maschinenfabrik G.F.Grosser GmbH started its production of typewriters in 1924.

    the brand name comes from combining the original company name, Maschinenfabrik G.F.Grosser, with its home town, Markersdorf

    until Kolibri production ended in 1962, one of the largest customers for Groma was the West German mail-order firm and department store Neckermann. And Adwoa adds that these Groma Kolibris were relabelled as Neckermann Brilliant Juniors. Looks like re-branded Kolibri
    
    <p>Paul Gossen passed away during the war—in June 1942—and the company was inherited by his widow and children. Paul's son Hans Gossen, and his son-in-law, Karl Klarner, became the chief executives. In August 1945, the U.S. Group Control Council, Germany (USGCC) allowed the company to resume manufacturing its pre-war product line. Plans to expand into the production of typewriters were accelerated—if not initiated—at that time as well.</p>

    <h3>1948 — Gossen Launches Their First Typewriter</h3>

    <p>The chief designer of Gossen's first typewriter, the <b>Gossen Tippa</b>, was Erwin Pfaffenberger who had joined the company in 1924 as a trainee draughtsman. Pfaffenberger apparently strived to improve upon the <em>Hermes Baby</em>, which had been on the market since 1935 and was the first widely-distributed <em>ultraportable</em> typewriter. When the Gossen Tippa was introduced in 1948, it had a nearly-identical footprint to that of the Baby. It also had a similar metal lid that, like the Baby's lid, fit over and attached to the machine, and it was 3/8 inch shorter than the Baby at 2 1/4 inches (or 2 7/16 inches with the lid attached). The Tippa sported a more angular, industrial look than the Baby. At 10 pounds 5 ounces, including the lid, the Tippa weighed 1 3/4 pounds more than the  8 pound 9 ounce Baby. (A bit over a pound of that additional Tippa weight was in the heavier gauge metal lid; the Tippa lid weighed 2 pounds 2 ounces, while the Baby lid then weighed 1 pound one ounce.)</p>

    <p>I am a fan and user of both the Gossen Tippa and the Hermes Baby, although I slightly prefer the feel of my Tippa. However, I find each has its own application; I take the Tippa or a Baby when roaming, but I employ a second generation <em>Hermes 3000</em> on my desktop at home. A Baby keyboard I have provides diacritics for writing in French, Spanish, or Portuguese, a feature that my Tippa keyboard lacks. That feature bumps my Baby up to my first choice when I want those diacritics while roaming. Your own mileage may vary.</p>
    
    <p>Typewriter collector Paolo Dal Chiele identifies the first two models of the Gossen Tippa as the <em>Tippa A Mk. I</em> and the <em>Tippa A Mk. II</em>. He notes distinguishing features of the Mk. I include its round, glass key tops, and two lid release buttons, one centered on each side of the lid. This model was manufactured into 1950, when it was replaced by the Mk. II. That second model has plastic, tombstone-shaped key tops and a single release button centered on the front end of the lid. The Mk. II was produced into 1953.</p>

    <p>A Gossen Tippa promotional brochure—illustrating the Mk. II model—noted that the typefaces offered were Pica and Elite, and the colors available were black, cerulean blue, light grey, maroon, sand, and ivory white. The listed price with metal lid was then DM325 [US$77.50 (= US$883 in 2023)], plus DM70 [US$17 (= US$194 in 2023)] for the optional leather briefcase. Extended payment plans were offered.</p>

    <p>A new model—often identified as the <b>Gossen Tippa B</b>—appeared in 1953. Retaining nearly identical dimensions as the earlier models, the angular edges were rounded, thus toning down the industrial look. Although it occasionally came with a metal lid, the Tippa B typically replaced the earlier base and lid with a base/lid combination that had a small leather suitcase look. This lockable case provides storage room in the lid. Over the ribbons, a pair of gull-wing covers with rounded tips replaced the earlier one-piece cover, and the ribbon/stencil selector was eliminated. Initially, the Tippa B retained the original Tippa's small, rotating carriage return lever, but in early 1954 that lever was replaced with a longer, easier-to-use one.</p>

    <p>In 1955, an evolved Tippa version named the <b>Gossen Tippa Pilot</b> appeared. In addition to the <em>Gossen Tippa</em> nameplate on the top of the shell, below the right ribbon cover, a chromed metal <em>pilot</em> logo was added below the left ribbon cover. A ribbon/stencil selector was again included. The Pilot model would prove to be the last in Gossen's line of typewriters. </p>

    <h3>Gossen Tippa Case Options — The Office in a Briefcase</h3>

    <p>From the beginning, Gossen offered different case options for its Tippas. Initially, the most common was the standard metal lid attaching directly to the machine. The color of that lid typically matched the color of the typewriter itself. Inside the metal lid, while there was no room for storage, metal clips were mounted on both sides of the base to secure writing instruments or cleaning brushes. Gossen also offered an optional, well-made, branded leather briefcase with a compartment that held the typewriter (with its metal lid attached). A second compartment held fresh paper, typed sheets, and other supplies.</p>

    <p>The suitcase-style leather case came in several colors, and included a folder attached inside the removable case lid to hold paper and supplies. Branding printed on that folder reads <em>Tippa-Boy</em>, <em>Tippa-B</em>, or <em>Tippa necessaire</em>.</p>

    <h3>Autumn 1956 — Gossen Sells Tippa License to Adler</h3>

    <p>It appears that Gossen's typewriter sales peaked in 1954 with about 35,000 units being produced that year. In the Autumn of 1956—following nearly two years of declining typewriter sales—the company apparently decided to re-focus their business on their electrical instruments, and they sold the license for <em>Tippa</em> typewriters to <em>Adler</em>.</p>

    <p>Writer and typewriter collector Robert Messenger notes subsequent typewriter manufacturer acqusitions and mergers involving the Tippa:
    </p>

      <ul>
        <li>1957 - Grundig absorbs Triumph typewriter brand</li>
        <li>1966 - Grundig-owned Triumph takes control of Adler</li>
        <li>1969 - Litton Industries takes over Triumph-Adler</li>
      </ul>
    
    <p>There are several 1957 and 1958 <b>Adler Tippa</b> and <b>Triumph Tippa</b> galleries in the Typewriter Database. [See the TypewriterDatabase.com links in the footnotes.] These typewriters look exactly like the Gossen Tippa B, but have <em>Adler Tippa</em> or <em>Triumph Tippa</em> nameplates below their right ribbon covers rather than <em>Gossen Tippa</em> ones. They have metal lids, and one in the database also has the leather breifcase.</p>

    <h3>Tippa Typewriters after Gossen: Adler and Triumph</h3>

    <p>1959 saw the launch of the first Adler-designed-and-manufactured Tippa. (Adler had been manufacturing other typewriter models in Germany for over 60 years.) Their Tippa had a new rounded look, winning design awards in Milan in 1960 and in Germany in 1962. It measured one inch deeper and just over a pound heavier than the original Gossen Tippa. The two-piece shell was plastic. Models, called the <b>Adler Tippa 1</b> and the <b>Adler Tippa 2</b> appeared in 1964 and 1966. A boxy-looking model, the <b>Adler Tippa S</b>, was manufactured in Holland by the merged Triumph-Adler and launched in 1967. That model—with production moving to Japan in the early 1970s—was offered into 1976.</p>

    <p>Theodore Munk, the mastermind behind the Typewriter Database, notes that—under <em>Royal/Litton</em>—the Tippa S continued in the form of the <b>Royal Caravan</b> and the <b>Royal Sahara</b>. These plastic machines were made in Holland begining in the mid-1970s. The Caravan had tabs; the Sahara did not.</p>

    <p>Richard Polt's web page, <em>The Classic Typewriter Page presents Writers and their Typewriters</em>, notes that author Will Self used (or uses) a Kolibri. Given the ultraportable size, the solid feel, and the quality of the Kolibri, it surprises me that Self is the only Groma-using writer noted.</p>
    

    <h3>The Neckermann Brilliant Junior - Re-branding of the Groma Kolibri</h3>

    <p>In the 1970s, I regularly used typewriters. We always had several in the house when I was growing up. Though I have forgotten what brand I used when writing papers for university in the 70s, I do recall that it was a portable with a plastic shell and case. However, I well-remember leasing an <em>IBM Selectric</em> in 1978 and 1979 to produce master copies of catalog pages of scarce books that I had scouted and was offering for sale. I also bought a new <b>Gossen Super Pilot</b> light meter to help me properly expose my film while photographing those books to ilustrate my catalogs. Word Processing on a PC soon followed, but I still have—and use—that Gossen light meter.</p>

    The typewriter is impressively low profile, but it is no lightweight. It weighs about of 8-1/2 lbs.

That weight is in steel, plastic, and rubber, with a tiny bit of fabric ribbon.
All that steel means it is sturdy, and will take a lot of pounding. But it *is* German, and it *does* have a few delicate pieces. The paper bail is a prime example; the page holder-upper is another. Treat it with care and respect.

The key action is really quite good. I can type on it without feeling like my fingers are cramping up.
There is no key pressure adjustment. (The Kolibri Luxus model *does* have the light-med-hard adjustment dial on the left side of the keyboard).

The carriage and roller platen is not wide enough for a No, 10 envelope. It is about 1/4" too narrow. It *will* fit a No. 9 envelope. Barely.

The typewriter ribbon is a twin spool mechanism. 1/2" wide ribbon, 10-12 yards long. I think there is a spool designation of DIN2103, but don't quote me.
Single color ribbon. (Again, the rare Kolibri Luxus model has a selector lever on the right side of the keyboard to select red/black on the ribbon.)
The ribbon take-up mechanism is not auto-reversing. When the type starts fading because the ribbon is stuck at the end, you can change directions by toggling the tooth sticking out from under the right hand side, below the carriage knob.

There is no Tab key. This can be a show-stopper for many, and for those who need to use a typewriter for business.

The typeface is not 10 chars per inch Pica, nor is it 12 cpi Elite. Its 80 chars per 7 inches (18 cm), or 11.4 characters per inch.
So the type will not easily fill out pre-printed forms. But it does allow you to type 85 characters on a line with little room left over for left and right margins.

The carriage can accommodate three sheets, or two sheets and one carbon. I wouldn't want to try any more than that.

The bell that dings when you are around 8 characters away from the margin limit, is pretty small and quiet. Easy to miss or ignore it.

     <h4>Primary Sources:</h4>

    <p className="source"><b>Dal Chiele, Paolo</b>. <em><a href="https://typewriterdatabase.com/1949-gossen-tippa.13802.typewriter" target="_blank" rel="noopener noreferrer">1949 Gossen Tippa #10815 Gallery at TypewriterDatabase.com</a>.</em> Retrieved 04 Apr 2023. [Dal Chiele discusses the features of Gossen's first Tippas and shares numerous pictures of his Tippa A Mk. I, including side-by-side shots with an Erika 10 and a Tippa B.]</p>

    <p className="source"><b>Davis, Will</b>. <em><a href="http://www.willdavis.org/Reiseschreibmaschinen2.html" target="_blank" rel="noopener noreferrer">Reiseschreibmaschinen 2:  The Tippa</a>.</em> An undated web page about the Gossen, Adler, and Triumph Tippas. Retrieved 03 Apr 2023. [It appears this page was originally illustrated with 16 photos; sadly it now only has placeholders for them.]</p>

    <p className="source"><b>Messenger, Robert</b>. <em><a href="https://oztypewriter.blogspot.com/2011/12/groma-kolibri-typewriter-hummingbird.html" target="_blank" rel="noopener noreferrer">Groma Kolibri Typewriter: The Hummingbird Revisited</a>.</em> Blog post dated 24 Dec 2011. Retrieved 25 Jan 2024. [This is the most detailed presentation of the history of Groma's ultraportable models (Gromina and Kolibri) that we have found in the webosphere. Includes many photos.]</p>

    <p className="source"><b>Munk, Theodore</b>. <em><a href="https://munk.org/typecast/2015/12/26/gossen-tippa-serials-updated/" target="_blank" rel="noopener noreferrer">Gossen Tippa Serials Updated!</a>.</em> Blog post dated 26 Dec 2015. Retrieved 05 Apr 2023. [Munk announces refinements to the TWDB Tippa serial number pages, and points out that Adler simply continued their numbering from where Gossen stopped.]</p>

    <p className="source"><b>Polt, Richard.</b> <em>The Typewriter Revolution: A Typist's Companion for the 21st Century</em>. Woodstock, VT: The Countryman Press [2015]. Pages 105-106, including a photo of a Groma Kolibri.</p>

    <p className="source"><b>—</b>. <em><a href="https://site.xavier.edu/polt/typewriters/typers.html" target="_blank" rel="noopener noreferrer">The Classic Typewriter Page presents Writers and their Typewriters</a>.</em> Retrieved 04 Apr 2023. [Enumerates nearly 600 authors, and lists the typewriter model(s) each was known to use. Often includes links to images of the writers with their machines.]</p>

    <p className="source"><b>—</b>. <em><a href="http://writingball.blogspot.com/2013/05/gossen-tippa-brochure.html" target="_blank" rel="noopener noreferrer">Gossen Tippa brochure</a>.</em> Blog post dated 13 May 2013. Retrieved 07 Apr 2023. [Polt shares images of a Gossen Tippa promotional brochure.]</p>

    <p className="source"><b>TypewriterDatabase[dot]com</b>. <em><a href="https://typewriterdatabase.com/groma.31.typewriter-serial-number-database" target="_blank" rel="noopener noreferrer">Groma Typewriter Serial Numbers</a>.</em> Retrieved 25 Jan 2024.</p>

    <p className="source"><b>—</b>. <em><a href="https://typewriterdatabase.com/Groma.Gromina.31.bmys" target="_blank" rel="noopener noreferrer">Groma Gromina Typewriters by Year then Serial Number</a>.</em> Retrieved 25 Jan 2024. [Photo-illustrated galleries of typewriters of this model]</p>

    <p className="source"><b>—</b>. <em><a href="https://typewriterdatabase.com/Groma.Kolibri.31.bmys" target="_blank" rel="noopener noreferrer">Groma Kolibri Typewriters by Year then Serial Number</a>.</em> Retrieved 25 Jan 2024. [Photo-illustrated galleries of typewriters of this model]</p>

    <p className="source"><b>—</b>. <em><a href="https://typewriterdatabase.com/Groma.Kolibri+Luxus.31.bmys" target="_blank" rel="noopener noreferrer">Groma Kolibri Luxus Typewriters by Year then Serial Number</a>.</em> Retrieved 25 Jan 2024. [Photo-illustrated galleries of typewriters of this model]</p>

    <p className="source"><b>—</b>. <em><a href="https://typewriterdatabase.com/Groma.Kolibri+N.31.bmys" target="_blank" rel="noopener noreferrer">Groma Kolibri N Typewriter Serial Numbers</a>.</em> Retrieved 25 Jan 2024. [Photo-illustrated galleries of typewriters of this model]</p>

    <p className="source"><b>—</b>. <em><a href="https://typewriterdatabase.com/1938-groma-modell-e.9189.typewriter" target="_blank" rel="noopener noreferrer">Groma Modell E Typewriters by Year then Serial Number</a>.</em> Retrieved 25 Jan 2024. [Photo-illustrated galleries of typewriters of this model]</p>

    <p className="source"><b>—</b>. <em><a href="https://typewriterdatabase.com/Groma.Modell+N.31.bmys" target="_blank" rel="noopener noreferrer">Groma Modell N Typewriters by Year then Serial Number</a>.</em> Retrieved 25 Jan 2024. [Photo-illustrated galleries of typewriters of this model]</p>

    <p className="source"><b>—</b>. <em><a href="https://typewriterdatabase.com/Groma.Modell+T.31.bmys" target="_blank" rel="noopener noreferrer">Groma Modell T Typewriters by Year then Serial Number</a>.</em> Retrieved 25 Jan 2024. [Photo-illustrated galleries of typewriters of this model]</p>

    <p className="source"><b>-[dot]com</b>. <em><a href="Neckermann (Groma) Typewriter Serial Numbers" target="_blank" rel="noopener noreferrer">Neckermann (Groma) Typewriter Serial Numbers</a>.</em> Retrieved 25 Jan 2024.</p>

    <p className="source"><b>—</b>. <em><a href="https://typewriterdatabase.com/Neckermann+%28Groma%29.Brillant+Junior.800.bmys" target="_blank" rel="noopener noreferrer">Neckermann (Groma) Brillant Junior Typewriters by Year then Serial Number</a>.</em> Retrieved 25 Jan 2024. [Photo-illustrated galleries of typewriters of this model]</p>

    <p className="source"><b>—</b>. <em><a href="https://typewriterdatabase.com/Neckermann+%28Groma%29.Brilliant+Super.800.bmys" target="_blank" rel="noopener noreferrer">Neckermann (Groma) Brilliant Super Typewriters by Year then Serial Number</a>.</em> Retrieved 25 Jan 2024. [Photo-illustrated galleries of typewriters of this model]</p>
  </div>
  <div className="historical-images">
    <div className="image-container">
      <img className="card" src={tippa20} alt="1950 Gossen Tippa and 1952 Hermes Baby typewriters side-by-side" />
    </div>
    <p> Gossen Tippa / Hermes Baby</p>
     <div className="image-container">
      <img className="card" src={tippa21} alt="1950 Gossen Tippa and 1952 Hermes Baby typewriters viewed from above" />
    </div>
    <div className="image-container">
      <img className="card" src={tippa22} alt="1950 Gossen Tippa and 1952 Hermes Baby typewriter cases viewed from above" />
    </div>
    <p> Gossen Tippa / Hermes Baby</p>
     <div className="image-container">
      <img className="card" src={tippa23} alt="1950 Gossen Tippa and 1952 Hermes Baby typewriters front views side-by-side" />
    </div>
    <div className="image-container">
      <img className="card" src={tippa24} alt="1950 Gossen Tippa and 1952 Hermes Baby typewriters rear views side-by-side" />
    </div>
    <div className="image-container">
      <img className="card" src={tippa25} alt="1950 Gossen Tippa and 1952 Hermes Baby typewriters case heights viewed side-by-side" />
    </div>
    <p> Gossen Tippa / Hermes Baby</p>
    <div className="image-container">
      <img className="card" src={tippa26a} alt="Location of the number stamped on 1950 Gossen Tippa typewriter carriage rails" />
    </div>
    <p>The number stamped on the right end of Gossen Tippa carriage rails is <b>NOT</b> the machine's serial number.</p>
    <div className="image-container">
      <img className="card" src={tippa26b} alt="1Location of the serial number stamped on 1950 Gossen Tippa typewriters" />
    </div>
    <p>The serial number on early Gossen Tippas is stamped on the inside bottom of the machine, below the right ribbon spool.</p>
    <div className="image-container">
        <img className="card" src={tippa26c} alt="1Location of the serial number stamped on 1952 Gossen Tippa typewriters" />
      </div>
    <p>The serial number on later Gossen Tippas, Gossen Tippa Bs, and Gossen Tippa Pilots is lettered on the right inside bottom of the machine, just below the carriage rail.</p>
    <div className="image-container">
        <img className="card" src={tippa28} alt="Gossen Tippa typewriter and leather breifcase" />
      </div>
      <p>Gossen Tippa, with metal lid and leather breifcase</p>
      <div className="image-container">
        <img className="card" src={tippa29} alt="Gossen typewriter in lid and leather breifcase" />
      </div>
      <p>Gossen Tippa in lid and leather breifcase</p>
    <div className="image-container">
      <img className="card" src={tippa30} alt="Gossen Super Pilot photographic light meter" />
    </div>
    <p>Fun Fact: The Gossen Super Pilot light meter's "pilot" logo is the same design as that of the Gossen Tippa Pilot typewriter!</p>
</div>
</section>

<section className="gallery">
          <h2 className="typewriter-gallery">Tippa Typewriters Offered for Purchase</h2>
          { typewriters.length === 0 &&
            <MDBCard className="na-card">
              <MDBCardBody>
                <div>
                  <h2 className='mt-1 text-center'>More Tippa typewriters coming soon...</h2>
                </div>
              </MDBCardBody>
            </MDBCard>
          }
          { typewriters.length > 0 &&
            <div className="uk-grid-small uk-child-width-1-2@s uk-child-width-1-3@m" uk-grid="masonry: true">
            {typewriters.map(typewriter => {
              return <div key={typewriter.sku}>
                {typewriter.images && <CardImageCaptionLink item={typewriter} /> }
                </div>
              })}
            </div>
          }
        </section>

      </div>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiTypewriter(
      sort: {order: ASC}
      filter: {model: {name: {glob: "*Tippa*"}}, available: {eq: true}}
    ) {
      nodes {
        id
        subtitle
        brand {
          name
          slug
        }
        model {
          name
          slug
        }
        year
        sn
        price
        images {
          formats {
            large {
              url
            }
            medium {
              url
            }
            small {
              url
            }
            thumbnail {
              url
            }
          }
          name
        }
      }
    }
  }
`

export const Head = ({ location, params, data, pageContext }) => (
  <>
    <link rel="icon" type="image/png" href="../images/icon.png"></link>
    <title>Gossen Tippa and Adler Tippa Typewriters</title>
    <meta name="description" content="A brief history of Tippa ultraportable typewriter models manufactured from 1948 through 1984, covering Gossen Tippa, Adler Tippa, and Triumph Tippa." />
  </>
)

export default GromaPage
