import getSnippetFromDomElement from '../src'

const testBody = `<body>
<div class="our-story-card hero-card vlv" data-uia="our-story-card" data-uia-our-story="hero_fuji">
    <div class="our-story-card-background">
        <div class="concord-img-wrapper" data-uia="concord-img-wrapper" style="height: 672.594px;">
            <img alt="Some image" class="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/3b48f428-24ed-4692-bb04-bc7771854131/29c9731b-9e85-4d39-9908-ee715e32a167/RU-en-20200302-popsignuptwoweeks-perspective_alpha_website_small.jpg">
            <div class="concord-img-gradient"></div>
        </div>
    </div>
    <div class="our-story-card-text"><h1 class="our-story-card-title" data-uia="hero-title" id="">Unlimited movies, TV shows, and more.</h1>
        <h2 class="our-story-card-subtitle" data-uia="our-story-card-subtitle" id="">Watch anywhere. Cancel
            anytime.</h2>
        <form class="cta-form email-form" data-uia="email-form" method="POST"><h3 class="email-form-title">Ready to
            watch? Enter your email to create or access your account.</h3>
            <div class="email-form-lockup">
                <ul class="simpleForm structural ui-grid">
                    <li class="nfFormSpace field-email" data-uia="field-email+wrapper">
                        <div class="nfInput nfInputResponsive" data-uia="field-email+container">
                            <div class="nfInputPlacement"><label class="input_id" placeholder="email"><input
                                    autocomplete="email" class="nfTextField" data-uia="field-email" dir="" id="id_email"
                                    maxlength="50" minlength="5" name="email" tabindex="0" type="email"
                                    value=""><label class="placeLabel" for="id_email">Email address</label></label></div>
                        </div>
                    </li>
                </ul>
                <div class="our-story-cta-container">
                    <div class="our-story-cta-container-inner">
                        <div class="our-story-cta-button-container">
                            <div class="cta-link-wrapper">
                                <button autocomplete="off"
                                        class="btn our-story-cta our-story-cta-default our-story-cta-extra-large our-story-cta-chevron our-story-cta-normal-weight btn-red btn-large" data-uia="home-cta" placeholder="cta_link_startSignup" tabindex="0"
                                        type="submit"><span class="hero-cta-btn-txt"
                                                                  data-uia-our-story="hero-cta-btn-txt">TRY 30 DAYS FREE</span><span
                                        class="chevron-right-arrow" data-uia="" id=""><svg viewBox="0 0 6 12"
                                                                                           xmlns="http://www.w3.org/2000/svg"><desc>chevron</desc><path
                                        d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none"
                                        fill-rule="evenodd"></path></svg></span></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    <div class="center-pixel" style="position:absolute"></div>
</div>

<div class="our-story-card animation-card watchOnTv" data-uia="our-story-card" data-uia-our-story="watchOnTv">
    <div class="animation-card-container">
        <div class="our-story-card-text"><h1 class="our-story-card-title" data-uia="animation-card-title" id="">Enjoy on
            your TV.</h1>
            <h2 class="our-story-card-subtitle" data-uia="our-story-card-subtitle" id="">Watch on Smart TVs,
                Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2></div>
        <div class="our-story-card-img-container">
            <div class="our-story-card-animation-container"><img alt="" class="our-story-card-img"
                                                                 data-uia="our-story-card-img"
                                                                 src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png">
                <div class="our-story-card-animation">
                    <video autoplay="" class="our-story-card-video" loop="" muted="" playsinline="">
                        <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv.m4v"
                                type="video/mp4">
                    </video>
                    <div class="our-story-card-animation-text"></div>
                </div>
            </div>
        </div>
        <div class="center-pixel" style="position:absolute"></div>
    </div>
</div>
<div class="site-footer-wrapper centered dark"><div class="footer-divider"></div><div class="site-footer"><p class="footer-top"><a class="footer-top-a" href="https://help.netflix.com/contactus">Questions? Contact us.</a></p><ul class="footer-links structural"><li class="footer-link-item" placeholder="footer_responsive_link_faq_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/support/412" placeholder="footer_responsive_link_faq"><span id="" data-uia="data-uia-footer-label">FAQ</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_help_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com" placeholder="footer_responsive_link_help"><span id="" data-uia="data-uia-footer-label">Help Center</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_account_item"><a class="footer-link" data-uia="footer-link" href="/youraccount" placeholder="footer_responsive_link_account"><span id="" data-uia="data-uia-footer-label">Account</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_media_center_item"><a class="footer-link" data-uia="footer-link" href="https://media.netflix.com/" placeholder="footer_responsive_link_media_center"><span id="" data-uia="data-uia-footer-label">Media Center</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_relations_item"><a class="footer-link" data-uia="footer-link" href="http://ir.netflix.com/" placeholder="footer_responsive_link_relations"><span id="" data-uia="data-uia-footer-label">Investor Relations</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_jobs_item"><a class="footer-link" data-uia="footer-link" href="https://jobs.netflix.com/jobs" placeholder="footer_responsive_link_jobs"><span id="" data-uia="data-uia-footer-label">Jobs</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_waysToWatch_item"><a class="footer-link" data-uia="footer-link" href="/watch" placeholder="footer_responsive_link_waysToWatch"><span id="" data-uia="data-uia-footer-label">Ways to Watch</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_terms_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/termsofuse" placeholder="footer_responsive_link_terms"><span id="" data-uia="data-uia-footer-label">Terms of Use</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_privacy_separate_link_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/privacy" placeholder="footer_responsive_link_privacy_separate_link"><span id="" data-uia="data-uia-footer-label">Privacy</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_cookies_separate_link_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/privacy#cookies" placeholder="footer_responsive_link_cookies_separate_link"><span id="" data-uia="data-uia-footer-label">Cookie Preferences</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_corporate_information_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/en/node/2101" placeholder="footer_responsive_link_corporate_information"><span id="" data-uia="data-uia-footer-label">Corporate Information</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_contact_us_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/contactus" placeholder="footer_responsive_link_contact_us"><span id="" data-uia="data-uia-footer-label">Contact Us</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_speed_test_item"><a class="footer-link" data-uia="footer-link" href="https://fast.com" placeholder="footer_responsive_link_speed_test"><span id="" data-uia="data-uia-footer-label">Speed Test</span></a></li><li class="footer-link-item" placeholder="footer_responsive_link_legal_notices_item"><a class="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/notices" placeholder="footer_responsive_link_legal_notices"><span id="" data-uia="data-uia-footer-label">Legal Notices</span></a></li><li class="footer-link-item originals-link" placeholder="footer_responsive_link_netflix_originals_item"><a class="footer-link" data-uia="footer-link" href="https://www.netflix.com/ru/browse/genre/839338" placeholder="footer_responsive_link_netflix_originals"><span id="" data-uia="data-uia-footer-label">Netflix Originals</span></a></li></ul><p class="footer-country">Netflix Russia</p></div></div>
</body>`

describe('Check get snippet from dom element', () => {
  beforeAll(() => {
    document.body.innerHTML = testBody;
  });

  it('Should return snippet body with ... inner text', () => {
    const element = document.querySelector('body');
    const snippet = getSnippetFromDomElement(element);
    expect(snippet).toBe('<body>...</body>');
  });

  it('Should return snippet img without inner text', () => {
    const element = document.querySelector('.concord-img');
    const snippet = getSnippetFromDomElement(element);
    expect(snippet).toBe('<img alt="Some image" class="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/3b48f428-24ed-4692-bb04-bc7771854131/29c9731b-9e85-4d39-9908-ee715e32a167/RU-en-20200302-popsignuptwoweeks-perspective_alpha_website_small.jpg">');
  });

  it('Should return snippet of empty element without ... inner text', () => {
    const element = document.querySelector('.concord-img-gradient');
    const snippet = getSnippetFromDomElement(element);
    expect(snippet).toBe('<div class="concord-img-gradient"></div>');
  });

  it('Should return snippet of element with truncated by default inner text', () => {
    const element = document.querySelector('.our-story-card-title');
    const snippet = getSnippetFromDomElement(element);
    expect(snippet).toBe('<h1 class="our-story-card-title" data-uia="hero-title" id="">Unlimited movies, TV shows, and...</h1>');
  });

  it('Should return snippet of element with truncated with 15 symbol length inner text', () => {
    const element = document.querySelector('.our-story-card-title');
    const snippet = getSnippetFromDomElement(element, 15);
    expect(snippet).toBe('<h1 class="our-story-card-title" data-uia="hero-title" id="">Unlimited movies,...</h1>');
  });

  it('Should return snippet of element with inner html and truncated with 40 symbol length inner text', () => {
    const element = document.querySelector('.our-story-card-text');
    const snippet = getSnippetFromDomElement(element, 40);
    expect(snippet).toBe('<div class="our-story-card-text"><h1 class="our-story-card-title" data-uia="hero-title"...</div>');
  });

  it('Should return empty string when set not element type', () => {
    const element = document;
    // @ts-ignore
    const snippet = getSnippetFromDomElement(element);
    expect(snippet).toBe('');
  });
});