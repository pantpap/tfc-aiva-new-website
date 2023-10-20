import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AccordionModule } from 'ngx-accordion';
import { TabsModule } from 'ngx-tabset';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { SolutionsComponent } from './components/pages/solutions/solutions.component';
import { SolutionsDetailsComponent } from './components/pages/solutions-details/solutions-details.component';
import { CaseStudiesComponent } from './components/pages/case-studies/case-studies.component';
import { CaseStudiesDetailsComponent } from './components/pages/case-studies-details/case-studies-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { TeamComponent } from './components/pages/team/team.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { GalleryComponent } from './components/pages/gallery/gallery.component';
import { TestimonialsComponent } from './components/pages/testimonials/testimonials.component';
import { SignUpComponent } from './components/pages/sign-up/sign-up.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { FaqComponent } from './components/pages/faq/faq.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { OurServicesComponent } from './components/pages/our-services/our-services.component';
import { BetterPracticeGuidesComponent } from './components/pages/services/better-practice-guides/better-practice-guides.component';
import { ServicesListComponent } from './components/common/services-list/services-list.component';
import { ClusteringComponent } from './components/pages/services/clustering/clustering.component';
import { ConceptualArchitectureComponent } from './components/pages/services/conceptual-architecture/conceptual-architecture.component';
import { ProjectManagementComponent } from './components/pages/services/project-management/project-management.component';
import { StandardizationComponent } from './components/pages/services/standardization/standardization.component';
import { OutreachComponent } from './components/pages/services/outreach/outreach.component';
import { ProposalDevelopmentComponent } from './components/pages/services/proposal-development/proposal-development.component';
import { ReportsComponent } from './components/pages/reports/reports.component';
import { OurBlogComponent } from './components/pages/our-blog/our-blog.component';
import { PodcastsComponent } from './components/pages/podcasts/podcasts.component';
import { NewsComponent } from './components/pages/news/news.component';
import { ArchivesComponent } from './components/pages/archives/archives.component';
import { ProjectsComponent } from './components/pages/projects/projects.component';
import { ArchiveDetailsComponent } from './components/pages/archives/archive-details/archive-details.component';
import { PartnersComponent } from './components/pages/partners/partners.component';
import { ProjectDetailsComponent } from './components/pages/projects/project-details/project-details.component';
import { SponsorshipComponent } from './components/pages/sponsorship/sponsorship.component';
import { AlliancesComponent } from './components/pages/alliances/alliances.component';
import { SocialMediaComponent } from './components/common/social-media/social-media.component';
import { CareersComponent } from './components/pages/careers/careers.component';
import { EuropolComponent } from './components/pages/news/europol/europol.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeOneComponent,
    HomeTwoComponent,
    HomeThreeComponent,
    AboutComponent,
    SolutionsComponent,
    SolutionsDetailsComponent,
    CaseStudiesComponent,
    CaseStudiesDetailsComponent,
    BlogComponent,
    BlogDetailsComponent,
    TeamComponent,
    PricingComponent,
    GalleryComponent,
    TestimonialsComponent,
    SignUpComponent,
    SignInComponent,
    ErrorComponent,
    FaqComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    OurServicesComponent,
    BetterPracticeGuidesComponent,
    ServicesListComponent,
    ClusteringComponent,
    ConceptualArchitectureComponent,
    ProjectManagementComponent,
    StandardizationComponent,
    OutreachComponent,
    ProposalDevelopmentComponent,
    ReportsComponent,
    OurBlogComponent,
    PodcastsComponent,
    NewsComponent,
    ArchivesComponent,
    ProjectsComponent,
    ArchiveDetailsComponent,
    PartnersComponent,
    ProjectDetailsComponent,
    SponsorshipComponent,
    AlliancesComponent,
    SocialMediaComponent,
    CareersComponent,
    EuropolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    CarouselModule,
    BrowserAnimationsModule,
    TabsModule,
    NgxScrollTopModule,
    StickyNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
