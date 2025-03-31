"use strict";(self.webpackChunkwayang_website=self.webpackChunkwayang_website||[]).push([[996],{2456:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var t=n(5893),s=n(1151);const o={title:"How to contribute",sidebar_position:5,id:"contribute"},r=void 0,a={id:"community/contribute",title:"How to contribute",description:"This guide documents the best way to make various types of contribution to Apache Wayang, including what is required before submitting a code change.",source:"@site/docs/community/contribute.md",sourceDirName:"community",slug:"/community/contribute",permalink:"/docs/community/contribute",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"How to contribute",sidebar_position:5,id:"contribute"},sidebar:"communitySidebar",previous:{title:"Becoming a committer",permalink:"/docs/community/committer"},next:{title:"How to make a release",permalink:"/docs/community/release"}},l={},c=[{value:"Contributing by helping other users",id:"contributing-by-helping-other-users",level:3},{value:"Contributing by testing releases",id:"contributing-by-testing-releases",level:3},{value:"Contributing by reviewing changes",id:"contributing-by-reviewing-changes",level:2},{value:"Contributing documentation changes",id:"contributing-documentation-changes",level:2},{value:"Contributing user libraries to Wayang",id:"contributing-user-libraries-to-wayang",level:2},{value:"Contributing bug reports",id:"contributing-bug-reports",level:2},{value:"Contributing to JIRA maintenance",id:"contributing-to-jira-maintenance",level:3},{value:"ML4ALL and optimizer-specific contribution guidelines",id:"ml4all-and-optimizer-specific-contribution-guidelines",level:3},{value:"Error messages should answer the following questions:",id:"error-messages-should-answer-the-following-questions",level:4},{value:"Code review criteria",id:"code-review-criteria",level:3},{value:"Positives",id:"positives",level:4},{value:"Negatives, risks",id:"negatives-risks",level:4},{value:"Contributing code changes",id:"contributing-code-changes",level:3},{value:"Cloning the Apache Wayang\u2122 source code",id:"cloning-the-apache-wayang-source-code",level:3},{value:"JIRA",id:"jira",level:3},{value:"Pull request",id:"pull-request",level:3},{value:"The review process",id:"the-review-process",level:3},{value:"Closing your pull request / JIRA",id:"closing-your-pull-request--jira",level:3},{value:"Code style guide",id:"code-style-guide",level:2},{value:"If in doubt",id:"if-in-doubt",level:3},{value:"Code of conduct",id:"code-of-conduct",level:2}];function h(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"This guide documents the best way to make various types of contribution to Apache Wayang, including what is required before submitting a code change."}),"\n",(0,t.jsx)(i.p,{children:"Contributing to Wayang doesn\u2019t just mean writing code. Helping new users on the mailing list, testing releases, and improving documentation are also welcome. In fact, proposing significant code changes usually requires first gaining experience and credibility within the community by helping in other ways. This is also a guide to becoming an effective contributor."}),"\n",(0,t.jsx)(i.p,{children:"So, this guide organizes contributions in order that they should probably be considered by new contributors who intend to get involved long-term. Build some track record of helping others, rather than just open pull requests."}),"\n",(0,t.jsx)(i.h3,{id:"contributing-by-helping-other-users",children:"Contributing by helping other users"}),"\n",(0,t.jsx)(i.p,{children:"A great way to contribute to Wayang is to help answer user questions on the user@ mailing list or on StackOverflow. There are always many new Wayang users; taking a few minutes to help answer a question is a very valuable community service."}),"\n",(0,t.jsx)(i.p,{children:"Contributors should subscribe to this list and follow it in order to keep up to date on what\u2019s happening in Wayang. Answering questions is an excellent and visible way to help the community, which also demonstrates your expertise."}),"\n",(0,t.jsxs)(i.p,{children:["See the ",(0,t.jsx)(i.a,{href:"/docs/community/mailinglist",children:"Mailing Lists"})," guide for guidelines about how to effectively participate in discussions on the mailing list, as well as forums like StackOverflow."]}),"\n",(0,t.jsx)(i.h3,{id:"contributing-by-testing-releases",children:"Contributing by testing releases"}),"\n",(0,t.jsx)(i.p,{children:"Wayang\u2019s release process is community-oriented, and members of the community can vote on new releases on the dev@ mailing list. Wayang users are invited to subscribe to this list to receive announcements, and test their workloads on newer release and provide feedback on any performance or correctness issues found in the newer release."}),"\n",(0,t.jsx)(i.h2,{id:"contributing-by-reviewing-changes",children:"Contributing by reviewing changes"}),"\n",(0,t.jsx)(i.p,{children:"Changes to Wayang source code are proposed, reviewed and committed via GitHub pull requests (described later). Anyone can view and comment on active changes here. Reviewing others\u2019 changes is a good way to learn how the change process works and gain exposure to activity in various parts of the code. You can help by reviewing the changes and asking questions or pointing out issues \u2013 as simple as typos or small issues of style."}),"\n",(0,t.jsx)(i.h2,{id:"contributing-documentation-changes",children:"Contributing documentation changes"}),"\n",(0,t.jsxs)(i.p,{children:["To propose a change to release documentation (that is, docs that appear under ",(0,t.jsx)(i.a,{href:"/docs/guide/getting-started",children:"Developer"})," section), fork the website repo and edit the Markdown source files in Wayang\u2019s docs/ directory, the README file shows how to build the documentation locally to test your changes. The process to propose a doc change is otherwise the same as the process for proposing code changes below."]}),"\n",(0,t.jsxs)(i.p,{children:["To propose a change to the rest of the documentation (that is, docs that do ",(0,t.jsx)(i.strong,{children:"not"})," appear under ",(0,t.jsx)(i.a,{href:"/docs/guide/getting-started",children:"Developer"})," section), similarly, edit the Markdown in the wayang-website repository and open a pull request."]}),"\n",(0,t.jsx)(i.h2,{id:"contributing-user-libraries-to-wayang",children:"Contributing user libraries to Wayang"}),"\n",(0,t.jsx)(i.p,{children:"Just as Java and Scala applications can access a huge selection of libraries and utilities, none of which are part of Java or Scala themselves, Wayang aims to support a rich ecosystem of libraries. Many new useful utilities or features belong outside of Spark rather than in the core. For example: query optimizer code and language support probably has to be a part of core Wayang, but, useful machine learning algorithms can happily exist outside of Wayang."}),"\n",(0,t.jsx)(i.p,{children:"To that end, large and independent new functionality is often rejected for inclusion in Wayang itself, but, can and should be hosted as a separate project and repository, and included in the wayang-packages.org collection."}),"\n",(0,t.jsx)(i.h2,{id:"contributing-bug-reports",children:"Contributing bug reports"}),"\n",(0,t.jsxs)(i.p,{children:["Ideally, bug reports are accompanied by a proposed code change to fix the bug. This isn\u2019t always possible, as those who discover a bug may not have the experience to fix it. A bug may be reported by creating a ",(0,t.jsx)(i.a,{href:"https://issues.apache.org/jira/projects/WAYANG/issues/WAYANG-16?filter=allopenissues",children:"JIRA"})," or a ",(0,t.jsx)(i.a,{href:"https://github.com/apache/incubator-wayang/issues",children:"GitHub Issue"})," but without creating a pull request (see below)."]}),"\n",(0,t.jsx)(i.p,{children:"Bug reports are only useful however if they include enough information to understand, isolate and ideally reproduce the bug. Simply encountering an error does not mean a bug should be reported; as below, search JIRA and search and inquire on the Wayang user / dev mailing lists first. Unreproducible bugs, or simple error reports, may be closed."}),"\n",(0,t.jsx)(i.p,{children:"It\u2019s very helpful if the bug report has a description about how the bug was introduced, by which commit, so that reviewers can easily understand the bug. It also helps committers to decide how far the bug fix should be backported, when the pull request is merged. The pull request to fix the bug should narrow down the problem to the root cause."}),"\n",(0,t.jsx)(i.p,{children:"Performance regression is also one kind of bug. The pull request to fix a performance regression must provide a benchmark to prove the problem is indeed fixed."}),"\n",(0,t.jsx)(i.p,{children:"Note that, data correctness/data loss bugs are very serious. Make sure the corresponding bug report JIRA ticket is labeled as correctness or data-loss. If the bug report doesn\u2019t get enough attention, please send an email to dev@, to draw more attentions."}),"\n",(0,t.jsx)(i.p,{children:"It is possible to propose new features as well. These are generally not helpful unless accompanied by detail, such as a design document and/or code change. Large new contributions should consider wayang-packages.org first (see above), or be discussed on the mailing list first. Feature requests may be rejected, or closed after a long period of inactivity."}),"\n",(0,t.jsx)(i.h3,{id:"contributing-to-jira-maintenance",children:"Contributing to JIRA maintenance"}),"\n",(0,t.jsx)(i.p,{children:"Given the volume of issues raised in the Apache Wayang JIRA, inevitably some issues are duplicates, or become obsolete and eventually fixed otherwise, or can\u2019t be reproduced, or could benefit from more detail, and so on. It\u2019s useful to help identify these issues and resolve them, either by advancing the discussion or even resolving the JIRA. Most contributors are able to directly resolve JIRAs. Use judgment in determining whether you are quite confident the issue should be resolved, although changes can be easily undone. If in doubt, just leave a comment on the JIRA."}),"\n",(0,t.jsx)(i.p,{children:"When resolving JIRAs, observe a few useful conventions:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Resolve as Fixed if there\u2019s a change you can point to that resolved the issue"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Set Fix Version(s), if and only if the resolution is Fixed"}),"\n",(0,t.jsx)(i.li,{children:"Set Assignee to the person who most contributed to the resolution, which is usually the person who opened the PR that resolved the issue."}),"\n",(0,t.jsx)(i.li,{children:"In case several people contributed, prefer to assign to the more \u2018junior\u2019, non-committer contributor"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"For issues that can\u2019t be reproduced against master as reported, resolve as Cannot Reproduce"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Fixed is reasonable too, if it\u2019s clear what other previous pull request resolved it. Link to it."}),"\n",(0,t.jsx)(i.li,{children:"If the issue is the same as or a subset of another issue, resolved as Duplicate"}),"\n",(0,t.jsx)(i.li,{children:"Make sure to link to the JIRA it duplicates"}),"\n",(0,t.jsx)(i.li,{children:"Prefer to resolve the issue that has less activity or discussion as the duplicate"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"If the issue seems clearly obsolete and applies to issues or components that have changed radically since it was opened, resolve as Not a Problem"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"If the issue doesn\u2019t make sense \u2013 not actionable, for example, a non-Spark issue, resolve as Invalid"}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"If it\u2019s a coherent issue, but there is a clear indication that there is not support or interest in acting on it, then resolve as Won\u2019t Fix"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Sometimes, a contributor will already have a particular new change or bug in mind. If seeking ideas, consult the list of starter tasks in JIRA, or ask the user@ mailing list."}),"\n",(0,t.jsx)(i.p,{children:"Before proceeding, contributors should evaluate if the proposed change is likely to be relevant, new and actionable:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Is it clear that code must change? Proposing a JIRA and pull request is appropriate only when a clear problem or change has been identified. If simply having trouble using Spark, use the mailing lists first, rather than consider filing a JIRA or proposing a change. When in doubt, email user@ first about the possible change"}),"\n",(0,t.jsx)(i.li,{children:"Search the user@ and dev@ mailing list archives for related discussions. Often, the problem has been discussed before, with a resolution that doesn\u2019t require a code change, or recording what kinds of changes will not be accepted as a resolution."}),"\n",(0,t.jsxs)(i.li,{children:["Search JIRA for existing issues: ",(0,t.jsx)(i.a,{href:"https://issues.apache.org/jira/browse/WAYANG",children:"https://issues.apache.org/jira/browse/WAYANG"})]}),"\n",(0,t.jsx)(i.li,{children:"Is the scope of the change matched to the contributor\u2019s level of experience? Anyone is qualified to suggest a typo fix, but refactoring core scheduling logic requires much more understanding of Wayang. Some changes require building up experience first (see above)."}),"\n",(0,t.jsx)(i.li,{children:"It\u2019s worth reemphasizing that changes to the core of Wayang, or to highly complex and important modules like SQL and Catalyst, are more difficult to make correctly. They will be subjected to more scrutiny, and held to a higher standard of review than changes to less critical code."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"ml4all-and-optimizer-specific-contribution-guidelines",children:"ML4ALL and optimizer-specific contribution guidelines"}),"\n",(0,t.jsx)(i.p,{children:"While a rich set of algorithms is an important goal for Wayang, scaling the project requires that maintainability, consistency, and code quality come first. New algorithms should:"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Be used and accepted (academic citations and concrete use cases can help justify this)"}),"\n",(0,t.jsx)(i.li,{children:"Be well documented"}),"\n",(0,t.jsx)(i.li,{children:"Have APIs consistent with other algorithms in Wayang"}),"\n",(0,t.jsx)(i.li,{children:"Come with a reasonable expectation of developer support"}),"\n",(0,t.jsx)(i.li,{children:"Error message guidelines"}),"\n",(0,t.jsx)(i.li,{children:"Exceptions thrown in Wayang should be associated with standardized and actionable error messages"}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"error-messages-should-answer-the-following-questions",children:"Error messages should answer the following questions:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"What was the problem?"}),"\n",(0,t.jsx)(i.li,{children:"Why did the problem happen?"}),"\n",(0,t.jsx)(i.li,{children:"How can the problem be solved?"}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.strong,{children:"When writing error messages, you should"}),":"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Use active voice"}),"\n",(0,t.jsx)(i.li,{children:"Avoid time-based statements, such as promises of future support"}),"\n",(0,t.jsx)(i.li,{children:"Use the present tense to describe the error and provide suggestions"}),"\n",(0,t.jsx)(i.li,{children:"Provide concrete examples if the resolution is unclear"}),"\n",(0,t.jsx)(i.li,{children:"Avoid sounding accusatory, judgmental, or insulting"}),"\n",(0,t.jsx)(i.li,{children:"Be direct"}),"\n",(0,t.jsx)(i.li,{children:"Do not use programming jargon in user-facing errors\n8 See the error message guidelines for more details."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"code-review-criteria",children:"Code review criteria"}),"\n",(0,t.jsx)(i.p,{children:"Before considering how to contribute code, it\u2019s useful to understand how code is reviewed, and why changes may be rejected. See the detailed guide for code reviewers from Google\u2019s Engineering Practices documentation. Simply put, changes that have many or large positives, and few negative effects or risks, are much more likely to be merged, and merged quickly. Risky and less valuable changes are very unlikely to be merged, and may be rejected outright rather than receive iterations of review."}),"\n",(0,t.jsx)(i.h4,{id:"positives",children:"Positives"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Fixes the root cause of a bug in existing functionality"}),"\n",(0,t.jsx)(i.li,{children:"Adds functionality or fixes a problem needed by a large number of users"}),"\n",(0,t.jsx)(i.li,{children:"Simple, targeted"}),"\n",(0,t.jsx)(i.li,{children:"Maintains or improves consistency across Python, Java, Scala"}),"\n",(0,t.jsx)(i.li,{children:"Easily tested; has tests"}),"\n",(0,t.jsx)(i.li,{children:"Reduces complexity and lines of code"}),"\n",(0,t.jsx)(i.li,{children:"Change has already been discussed and is known to committers"}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"negatives-risks",children:"Negatives, risks"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Band-aids a symptom of a bug only"}),"\n",(0,t.jsx)(i.li,{children:"Introduces complex new functionality, especially an API that needs to be supported"}),"\n",(0,t.jsx)(i.li,{children:"Adds complexity that only helps a niche use case"}),"\n",(0,t.jsx)(i.li,{children:"Adds user-space functionality that does not need to be maintained in Wayang, but could be hosted externally and indexed by wayang-packages.org"}),"\n",(0,t.jsx)(i.li,{children:"Changes a public API or semantics (rarely allowed)"}),"\n",(0,t.jsx)(i.li,{children:"Adds large dependencies"}),"\n",(0,t.jsx)(i.li,{children:"Changes versions of existing dependencies"}),"\n",(0,t.jsx)(i.li,{children:"Adds a large amount of code"}),"\n",(0,t.jsx)(i.li,{children:"Makes lots of modifications in one \u201cbig bang\u201d change"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"contributing-code-changes",children:"Contributing code changes"}),"\n",(0,t.jsx)(i.p,{children:"Please review the preceding section before proposing a code change. This section documents how to do so."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.strong,{children:"When you contribute code, you affirm that the contribution is your original work and that you license the work to the project under the project\u2019s open source license. Whether or not you state this explicitly, by submitting any copyrighted material via pull request, email, or other means you agree to license the material under the project\u2019s open source license and warrant that you have the legal authority to do so."})}),"\n",(0,t.jsx)(i.h3,{id:"cloning-the-apache-wayang-source-code",children:"Cloning the Apache Wayang\u2122 source code"}),"\n",(0,t.jsx)(i.p,{children:"If you are interested in working with the newest under-development code or contributing to Apache Spark development, you can check out the master branch from Git:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{children:"# Master development branch\ngit clone git://github.com/apache/incubator-wayang.git\n"})}),"\n",(0,t.jsxs)(i.p,{children:["Once you\u2019ve downloaded Wayang, you can find instructions for installing and building it on the ",(0,t.jsx)(i.a,{href:"/docs/guide/installation",children:"Compiling Apache Wayang"})," page."]}),"\n",(0,t.jsx)(i.h3,{id:"jira",children:"JIRA"}),"\n",(0,t.jsx)(i.p,{children:"Generally, Wayang uses JIRA to track logical issues, including bugs and improvements, and uses GitHub pull requests to manage the review and merge of specific code changes. That is, JIRAs are used to describe what should be fixed or changed, and high-level approaches, and pull requests describe how to implement that change in the project\u2019s source code. For example, major design decisions are discussed in JIRA."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Find the existing Spark JIRA that the change pertains to.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Do not create a new JIRA if creating a change to address an existing issue in JIRA; add to the existing discussion and work instead"}),"\n",(0,t.jsx)(i.li,{children:"Look for existing pull requests that are linked from the JIRA, to understand if someone is already working on the JIRA"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["If the change is new, then it usually needs a new JIRA. However, trivial changes, where the what should change is virtually the same as the how it should change do not require a JIRA. Example: ",(0,t.jsx)(i.code,{children:"Fix typos in Foo wayang doc"})]}),"\n",(0,t.jsxs)(i.li,{children:["If required, create a new JIRA:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Provide a descriptive Title. \u201cUpdate web UI\u201d or \u201cProblem in scheduler\u201d is not sufficient. \u201cKafka Streaming support fails to handle empty queue in YARN cluster mode\u201d is good."}),"\n",(0,t.jsx)(i.li,{children:"Write a detailed description. For bug reports, this should ideally include a short reproduction of the problem. For new features, it may include a design document."}),"\n",(0,t.jsxs)(i.li,{children:["Set required fields:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Issue Type. Generally, Bug, Improvement and New Feature are the only types used in Spark."}),"\n",(0,t.jsxs)(i.li,{children:["Priority. Set to Major or below; higher priorities are generally reserved for committers to set. The main exception is correctness or data-loss issues, which can be flagged as Blockers. JIRA tends to unfortunately conflate \u201csize\u201d and \u201cimportance\u201d in its Priority field values. Their meaning is roughly:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Blocker"}),": pointless to release without this change as the release would be unusable to a large minority of users. Correctness and data loss issues should be considered Blockers for their target versions."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Critical"}),": a large minority of users are missing important functionality without this, and/or a workaround is difficult"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Major"}),": a small minority of users are missing important functionality without this, and there is a workaround"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Minor"}),": a niche use case is missing some support, but it does not affect usage or is easily worked around"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Trivial"}),": a nice-to-have change but unlikely to be any problem in practice otherwise"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Component"}),"\n",(0,t.jsx)(i.li,{children:"Affects Version. For Bugs, assign at least one version that is known to exhibit the problem or need the change"}),"\n",(0,t.jsxs)(i.li,{children:["Label. Not widely used, except for the following:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"correctness"}),": a correctness issue"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"data-loss"}),": a data loss issue"]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"release-notes"}),": the change\u2019s effects need mention in release notes. The JIRA or pull request should include detail suitable for inclusion in release notes \u2013 see \u201cDocs Text\u201d below."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.code,{children:"starter"}),": small, simple change suitable for new contributors"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Docs Text: For issues that require an entry in the release notes, this should contain the information that the release manager should include in Release Notes. This should include a short summary of what behavior is impacted, and detail on what behavior changed. It can be provisionally filled out when the JIRA is opened, but will likely need to be updated with final details when the issue is resolved."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["Do not set the following fields:","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Fix Version"})," This is assigned by committers only when resolved."]}),"\n",(0,t.jsxs)(i.li,{children:[(0,t.jsx)(i.strong,{children:"Target Version"})," This is assigned by committers to indicate a PR has been accepted for possible fix by the target version."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Do not include a patch file; pull requests are used to propose the actual change."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"If the change is a large change, consider inviting discussion on the issue at dev@ first before proceeding to implement the change."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"pull-request",children:"Pull request"}),"\n",(0,t.jsx)(i.p,{children:"Before creating a pull request in Apache Wayang, it is important to check if tests can pass on your branch because our GitHub Actions workflows automatically run tests for your pull request/following commits and every run burdens the limited resources of GitHub Actions in Apache Wayang repository. Below steps will take your through the process."}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["Fork the GitHub repository at ",(0,t.jsx)(i.a,{href:"https://github.com/apache/incubator-wayang",children:"https://github.com/apache/incubator-wayang"})," if you haven\u2019t already"]}),"\n",(0,t.jsx)(i.li,{children:"Go to \u201cActions\u201d tab on your forked repository and enable \u201cBuild and test\u201d and \u201cReport test results\u201d workflows"}),"\n",(0,t.jsx)(i.li,{children:"Clone your fork and create a new branch"}),"\n",(0,t.jsxs)(i.li,{children:["Consider whether documentation or tests need to be added or updated as part of the change, and add them as needed.","\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"When you add tests, make sure the tests are self-descriptive."}),"\n",(0,t.jsx)(i.li,{children:"Also, you should consider writing a JIRA ID in the tests when your pull request targets to fix a specific issue. In practice, usually it is added when a JIRA type is a bug or a PR adds a couple of tests to an existing test class. See the examples below:"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-Java",children:"@Test\npublic void testCase() {\n  // WAYANG-12345: a short description of the test\n"})}),"\n",(0,t.jsxs)(i.ol,{start:"5",children:["\n",(0,t.jsx)(i.li,{children:"Consider whether benchmark results should be added or updated as part of the change, and add them as needed by Running benchmarks in your forked repository to generate benchmark results."}),"\n",(0,t.jsx)(i.li,{children:"Run all tests with in your build to verify that the code still compiles, passes tests, and passes style checks. If style checks fail, review the Code Style Guide below."}),"\n",(0,t.jsx)(i.li,{children:"Push commits to your branch. This will trigger \u201cBuild and test\u201d and \u201cReport test results\u201d workflows on your forked repository and start testing and validating your changes."}),"\n",(0,t.jsxs)(i.li,{children:["Open a ",(0,t.jsx)(i.a,{href:"https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests",children:"pull request"})," against the master branch of apache/incubator-wayang. (Only in special cases would the PR be opened against other branches). This will trigger workflows \u201cOn pull request*\u201d (on the Wayang repo) that will look/watch for successful workflow runs on \u201cyour\u201d forked repository (it will wait if one is running).","\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"The PR title should be of the form [WAYANG-xxxx][COMPONENT] Title, where WAYANG-xxxx is the relevant JIRA number, COMPONENT is one of the PR categories and Title may be the JIRA\u2019s title or a more specific title describing the PR itself."}),"\n",(0,t.jsx)(i.li,{children:"If the pull request is still a work in progress, and so is not ready to be merged, but needs to be pushed to GitHub to facilitate review, then add [WIP] after the component."}),"\n",(0,t.jsx)(i.li,{children:"Consider identifying committers or other contributors who have worked on the code being changed. Find the file(s) in GitHub and click \u201cBlame\u201d to see a line-by-line annotation of who changed the code last. You can add @username in the PR description to ping them immediately."}),"\n",(0,t.jsx)(i.li,{children:"Please state that the contribution is your original work and that you license the work to the project under the project\u2019s open source license."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"The related JIRA, if any, will be marked as \u201cIn Progress\u201d and your pull request will automatically be linked to it. There is no need to be the Assignee of the JIRA to work on it, though you are welcome to comment that you have begun work."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"the-review-process",children:"The review process"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Other reviewers, including committers, may comment on the changes and suggest modifications. Changes can be added by simply pushing more commits to the same branch."}),"\n",(0,t.jsx)(i.li,{children:"Lively, polite, rapid technical debate is encouraged from everyone in the community. The outcome may be a rejection of the entire change."}),"\n",(0,t.jsx)(i.li,{children:"Keep in mind that changes to more critical parts of Spark, like its core and SQL components, will be subjected to more review, and may require more testing and proof of its correctness than other changes."}),"\n",(0,t.jsx)(i.li,{children:"Reviewers can indicate that a change looks suitable for merging with a comment such as: \u201cI think this patch looks good\u201d. Wayang uses the LGTM convention for indicating the strongest level of technical sign-off on a patch: simply comment with the word \u201cLGTM\u201d. It specifically means: \u201cI\u2019ve looked at this thoroughly and take as much ownership as if I wrote the patch myself\u201d. If you comment LGTM you will be expected to help with bugs or follow-up issues on the patch. Consistent, judicious use of LGTMs is a great way to gain credibility as a reviewer with the broader community."}),"\n",(0,t.jsxs)(i.li,{children:["Sometimes, other changes will be merged which conflict with your pull request\u2019s changes. The PR can\u2019t be merged until the conflict is resolved. This can be resolved by, for example, adding a remote to keep up with upstream changes by git remote add upstream ",(0,t.jsx)(i.a,{href:"https://github.com/apache/incubator-wayang.git",children:"https://github.com/apache/incubator-wayang.git"}),", running git fetch upstream followed by git rebase upstream/master and resolving the conflicts by hand, then pushing the result to your branch."]}),"\n",(0,t.jsx)(i.li,{children:"Try to be responsive to the discussion rather than let days pass between replies"}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"closing-your-pull-request--jira",children:"Closing your pull request / JIRA"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["If a change is accepted, it will be merged and the pull request will automatically be closed, along with the associated JIRA if any","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Note that in the rare case you are asked to open a pull request against a branch besides master, that you will actually have to close the pull request manually"}),"\n",(0,t.jsx)(i.li,{children:"The JIRA will be Assigned to the primary contributor to the change as a way of giving credit. If the JIRA isn\u2019t closed and/or Assigned promptly, comment on the JIRA."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["If your pull request is ultimately rejected, please close it promptly","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"\u2026 because committers can\u2019t close PRs directly"}),"\n",(0,t.jsx)(i.li,{children:"Pull requests will be automatically closed by an automated process at Apache after about a week if a committer has made a comment like \u201cmind closing this PR?\u201d This means that the committer is specifically requesting that it be closed."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"If a pull request has gotten little or no attention, consider improving the description or the change itself and ping likely reviewers again after a few days. Consider proposing a change that\u2019s easier to include, like a smaller and/or less invasive change."}),"\n",(0,t.jsx)(i.li,{children:"If it has been reviewed but not taken up after weeks, after soliciting review from the most relevant reviewers, or, has met with neutral reactions, the outcome may be considered a \u201csoft no\u201d. It is helpful to withdraw and close the PR in this case."}),"\n",(0,t.jsx)(i.li,{children:"If a pull request is closed because it is deemed not the right approach to resolve a JIRA, then leave the JIRA open. However if the review makes it clear that the issue identified in the JIRA is not going to be resolved by any pull request (not a problem, won\u2019t fix) then also resolve the JIRA."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"code-style-guide",children:"Code style guide"}),"\n",(0,t.jsx)(i.p,{children:"Please follow the style of the existing codebase."}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["For Python code, Apache Wayang follows ",(0,t.jsx)(i.a,{href:"http://legacy.python.org/dev/peps/pep-0008/",children:"PEP 8"})," with one exception: lines can be up to 100 characters in length, not 79."]}),"\n",(0,t.jsxs)(i.li,{children:["For R code, Apache Wayang follows ",(0,t.jsx)(i.a,{href:"https://google.github.io/styleguide/Rguide.xml",children:"Google\u2019s R Style Guide"})," with three exceptions: lines can be up to 100 characters in length, not 80, there is no limit on function name but it has a initial lower case latter and S4 objects/methods are allowed."]}),"\n",(0,t.jsxs)(i.li,{children:["For Java code, Apache Wayang follows ",(0,t.jsx)(i.a,{href:"http://www.oracle.com/technetwork/java/codeconvtoc-136057.html",children:"Oracle\u2019s Java code conventions"})," and Scala guidelines below. The latter is preferred."]}),"\n",(0,t.jsxs)(i.li,{children:["For Scala code, Apache Wayang follows the official ",(0,t.jsx)(i.a,{href:"http://docs.scala-lang.org/style/",children:"Scala style guide"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"if-in-doubt",children:"If in doubt"}),"\n",(0,t.jsx)(i.p,{children:"If you\u2019re not sure about the right style for something, try to follow the style of the existing codebase. Look at whether there are other examples in the code that use your feature. Feel free to ask on the dev@ list as well and/or ask committers."}),"\n",(0,t.jsx)(i.h2,{id:"code-of-conduct",children:"Code of conduct"}),"\n",(0,t.jsx)(i.p,{children:"The Apache Wayang project follows the Apache Software Foundation Code of Conduct. The code of conduct applies to all spaces managed by the Apache Software Foundation, including IRC, all public and private mailing lists, issue trackers, wikis, blogs, Twitter, and any other communication channel used by our communities. A code of conduct which is specific to in-person events (ie., conferences) is codified in the published ASF anti-harassment policy."}),"\n",(0,t.jsx)(i.p,{children:"We expect this code of conduct to be honored by everyone who participates in the Apache community formally or informally, or claims any affiliation with the Foundation, in any Foundation-related activities and especially when representing the ASF, in any role."}),"\n",(0,t.jsx)(i.p,{children:"This code is not exhaustive or complete. It serves to distill our common understanding of a collaborative, shared environment and goals. We expect it to be followed in spirit as much as in the letter, so that it can enrich all of us and the technical communities in which we participate."}),"\n",(0,t.jsx)(i.p,{children:"For more information and specific guidelines, refer to the Apache Software Foundation Code of Conduct."}),"\n",(0,t.jsxs)(i.p,{children:["This guide was originally released by ",(0,t.jsx)(i.a,{href:"https://spark.apache.org/contributing.html",children:"Apache Spark"}),", the Apache Wayang project adapted the guide."]})]})}function d(e={}){const{wrapper:i}={...(0,s.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>a,a:()=>r});var t=n(7294);const s={},o=t.createContext(s);function r(e){const i=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:i},e.children)}}}]);