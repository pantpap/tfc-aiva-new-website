import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import {OurServicesComponent} from './components/pages/our-services/our-services.component';
import {ClusteringComponent} from './components/pages/services/clustering/clustering.component';
import {
    BetterPracticeGuidesComponent
} from './components/pages/services/better-practice-guides/better-practice-guides.component';
import {
    ConceptualArchitectureComponent
} from './components/pages/services/conceptual-architecture/conceptual-architecture.component';
import {ProjectManagementComponent} from './components/pages/services/project-management/project-management.component';
import {StandardizationComponent} from './components/pages/services/standardization/standardization.component';
import {OutreachComponent} from './components/pages/services/outreach/outreach.component';
import {
    ProposalDevelopmentComponent
} from './components/pages/services/proposal-development/proposal-development.component';
import {ReportsComponent} from './components/pages/reports/reports.component';
import {OurBlogComponent} from './components/pages/our-blog/our-blog.component';
import {PodcastsComponent} from './components/pages/podcasts/podcasts.component';
import {NewsComponent} from './components/pages/news/news.component';
import {ArchivesComponent} from './components/pages/archives/archives.component';
import {ProjectsComponent} from './components/pages/projects/projects.component';
import {ArchiveDetailsComponent} from './components/pages/archives/archive-details/archive-details.component';
import {PartnersComponent} from './components/pages/partners/partners.component';

const routes: Routes = [
    {path: '', component: HomeOneComponent},
    {path: 'our-services', component: OurServicesComponent},
    {path: 'services-clustering', component: ClusteringComponent},
    {path: 'services-better-practice-guides', component: BetterPracticeGuidesComponent},
    {path: 'services-conceptual-architecture', component: ConceptualArchitectureComponent},
    {path: 'services-project-management', component: ProjectManagementComponent},
    {path: 'services-standardization', component: StandardizationComponent},
    {path: 'services-outreach', component: OutreachComponent},
    {path: 'services-proposal-development', component: ProposalDevelopmentComponent},
    {path: 'reports', component: ReportsComponent},
    {path: 'blog', component: OurBlogComponent},
    {path: 'podcasts', component: PodcastsComponent},
    {path: 'news', component: NewsComponent},
    {path: 'archives', component: ArchivesComponent},
    {path: 'archives/:projectName', component: ArchiveDetailsComponent, data: {projects: false}},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'partners', component: PartnersComponent},
    {path: 'contact', component: ContactComponent},
    // {path: 'home-two', component: HomeTwoComponent},
    // {path: 'home-three', component: HomeThreeComponent},
    // {path: 'about', component: AboutComponent},
    // {path: 'solutions', component: SolutionsComponent},
    // {path: 'solutions-details', component: SolutionsDetailsComponent},
    // {path: 'case-studies', component: CaseStudiesComponent},
    // {path: 'case-studies-details', component: CaseStudiesDetailsComponent},
    // {path: 'blog', component: BlogComponent},
    // {path: 'blog-details', component: BlogDetailsComponent},
    // {path: 'team', component: TeamComponent},
    // {path: 'pricing', component: PricingComponent},
    // {path: 'gallery', component: GalleryComponent},
    // {path: 'testimonials', component: TestimonialsComponent},
    // {path: 'sign-up', component: SignUpComponent},
    // {path: 'sign-in', component: SignInComponent},
    // {path: 'error', component: ErrorComponent},
    // {path: 'faq', component: FaqComponent},
    // {path: 'terms-condition', component: TermsConditionsComponent},
    // Here add new pages component

    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
