import {
  IBranchProtectionRuleConnection,
  ICodeOfConduct,
  ICommitCommentConnection,
  IDependencyGraphManifestConnection,
  IDeployKeyConnection,
  IDeploymentConnection,
  IFundingLink,
  IGitObject, IIssue,
  IIssueConnection, IIssueOrPullRequest, ILabel, ILabelConnection, ILanguage, ILanguageConnection, ILicense, IMilestone,
  IMilestoneConnection, INode,
  IPackageConnection,
  IPackageOwner,
  IPinnedIssueConnection, IProject, IProjectConnection, IProjectOwner,
  IPullRequest,
  IPullRequestConnection,
  IRef,
  IRefConnection,
  IRelease,
  IReleaseConnection, IRepository,
  IRepositoryCollaboratorConnection, IRepositoryConnection,
  IRepositoryInfo,
  IRepositoryLockReason, IRepositoryOwner,
  IRepositoryPermission, IRepositoryTopicConnection, IRepositoryVulnerabilityAlertConnection,
  IStargazerConnection,
  IStarrable, ISubmoduleConnection,
  ISubscribable, ISubscriptionState, IUniformResourceLocatable,
  IUserConnection, Scalars, Maybe,
} from 'types/schema.types';

export type IPinnedRepositoryList = (null | ({ __typename?: "Repository" } & Pick<INode & IPackageOwner & IProjectOwner & IRepositoryInfo & IStarrable & ISubscribable & IUniformResourceLocatable & {
  __typename?: "Repository"; assignableUsers: IUserConnection; branchProtectionRules: IBranchProtectionRuleConnection; codeOfConduct?: Maybe<ICodeOfConduct>; collaborators?: Maybe<IRepositoryCollaboratorConnection>; commitComments: ICommitCommentConnection; createdAt: Scalars["DateTime"]; databaseId?: Maybe<Scalars["Int"]>; defaultBranchRef?: Maybe<IRef>; deleteBranchOnMerge: Scalars["Boolean"]; dependencyGraphManifests?: Maybe<IDependencyGraphManifestConnection>; deployKeys: IDeployKeyConnection; deployments: IDeploymentConnection; description?: Maybe<Scalars["String"]>; descriptionHTML: Scalars["HTML"]; diskUsage?: Maybe<Scalars["Int"]>; forkCount: Scalars["Int"]; forks: IRepositoryConnection; fundingLinks: Array<IFundingLink>; hasIssuesEnabled: Scalars["Boolean"]; hasProjectsEnabled: Scalars["Boolean"]; hasWikiEnabled: Scalars["Boolean"]; homepageUrl?: Maybe<Scalars["URI"]>; id: Scalars["ID"]; isArchived: Scalars["Boolean"]; isDisabled: Scalars["Boolean"]; isFork: Scalars["Boolean"]; isLocked: Scalars["Boolean"]; isMirror: Scalars["Boolean"]; isPrivate: Scalars["Boolean"]; isTemplate: Scalars["Boolean"]; issue?: Maybe<IIssue>; issueOrPullRequest?: Maybe<IIssueOrPullRequest>; issues: IIssueConnection; label?: Maybe<ILabel>; labels?: Maybe<ILabelConnection>; languages?: Maybe<ILanguageConnection>; licenseInfo?: Maybe<ILicense>; lockReason?: Maybe<IRepositoryLockReason>; mentionableUsers: IUserConnection; mergeCommitAllowed: Scalars["Boolean"]; milestone?: Maybe<IMilestone>; milestones?: Maybe<IMilestoneConnection>; mirrorUrl?: Maybe<Scalars["URI"]>; name: Scalars["String"]; nameWithOwner: Scalars["String"]; object?: Maybe<IGitObject>; openGraphImageUrl: Scalars["URI"]; owner: IRepositoryOwner; packages: IPackageConnection; parent?: Maybe<IRepository>; pinnedIssues?: Maybe<IPinnedIssueConnection>; primaryLanguage?: Maybe<ILanguage>; project?: Maybe<IProject>; projects: IProjectConnection; projectsResourcePath: Scalars["URI"]; projectsUrl: Scalars["URI"]; pullRequest?: Maybe<IPullRequest>; pullRequests: IPullRequestConnection; pushedAt?: Maybe<Scalars["DateTime"]>; rebaseMergeAllowed: Scalars["Boolean"]; ref?: Maybe<IRef>; refs?: Maybe<IRefConnection>; release?: Maybe<IRelease>; releases: IReleaseConnection; repositoryTopics: IRepositoryTopicConnection; resourcePath: Scalars["URI"]; shortDescriptionHTML: Scalars["HTML"]; squashMergeAllowed: Scalars["Boolean"]; sshUrl: Scalars["GitSSHRemote"]; stargazers: IStargazerConnection; submodules: ISubmoduleConnection; tempCloneToken?: Maybe<Scalars["String"]>; templateRepository?: Maybe<IRepository>; updatedAt: Scalars["DateTime"]; url: Scalars["URI"]; usesCustomOpenGraphImage: Scalars["Boolean"]; viewerCanAdminister: Scalars["Boolean"]; viewerCanCreateProjects: Scalars["Boolean"]; viewerCanSubscribe: Scalars["Boolean"]; viewerCanUpdateTopics: Scalars["Boolean"]; viewerHasStarred: Scalars["Boolean"]; viewerPermission?: Maybe<IRepositoryPermission>; viewerSubscription?: Maybe<ISubscriptionState>; vulnerabilityAlerts?: Maybe<IRepositoryVulnerabilityAlertConnection>; watchers: IUserConnection
}, "id" | "name" | "description"> & { primaryLanguage?: Maybe<{ __typename?: "Language" } & Pick<ILanguage, "color" | "name">>; stargazers: { __typename?: "StargazerConnection" } & Pick<IStargazerConnection, "totalCount">; forks: { __typename?: "RepositoryConnection" } & Pick<IRepositoryConnection, "totalCount"> }))[] | undefined
