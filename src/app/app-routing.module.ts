import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { ErrorComponent } from './components/pages/error/error.component';
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
import {ProjectDetailsComponent} from './components/pages/projects/project-details/project-details.component';
import {SponsorshipComponent} from './components/pages/sponsorship/sponsorship.component';
import {AlliancesComponent} from './components/pages/alliances/alliances.component';
import {CareersComponent} from './components/pages/careers/careers.component';
import {EuropolComponent} from './components/pages/news/europol/europol.component';
import {JoinPeersGroupComponent} from './components/pages/news/join-peers-group/join-peers-group.component';

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
    {path: 'news/europol', component: EuropolComponent},
    {path: 'news/join-peers-group', component: JoinPeersGroupComponent},
    {path: 'archives', component: ArchivesComponent},
    {path: 'archives/:archiveProjectName', component: ArchiveDetailsComponent, data: {projects: false}},
    {path: 'privacy-policy', component: PrivacyPolicyComponent},
    {path: 'projects', component: ProjectsComponent},
    {path: 'projects/:projectName', component: ProjectDetailsComponent},
    {path: 'partners', component: PartnersComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'sponsorship', component: SponsorshipComponent},
    {path: 'alliances', component: AlliancesComponent},
    {path: 'careers', component: CareersComponent},
    {path: '**', component: ErrorComponent} // This line will remain down from the whole pages component list

];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
