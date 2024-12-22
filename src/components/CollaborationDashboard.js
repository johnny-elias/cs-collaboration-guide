import React, { useState } from "react";
import {
  Search,
  AlertCircle,
  Users,
  Code2,
  Cpu,
  Book,
  Lock,
} from "lucide-react";

const categories = {
  open: "Open/Permissive",
  moderate: "Moderate/Structured",
  tiered: "Tiered/Phased",
  strict: "Strict/Limited",
  project: "Project-Based",
};

const courses = [
  {
    id: "0320/1340",
    name: "Introduction to Software Engineering",
    category: "open",
    description:
      "Explicitly allows sharing anything produced, viewing/adapting code from others, and using AI tools",
    features: ["AI Allowed", "Code Sharing OK", "Full Collaboration"],
    link: "https://docs.google.com/document/d/17aDeWqIe4OHaw4jw-ZydASAOcg7oU-JKtJma1bhTE2M/edit?tab=t.0",
    details: "Most permissive policy with proper attribution required",
  },
  {
    id: "1650",
    name: "Software Security and Exploitation",
    category: "open",
    description: "Allowed to collaborate with no limits",
    features: ["Full Collaboration", "Code Sharing OK"],
    link: "",
    details: "Open collaboration while maintaining academic integrity",
  },
  {
    id: "0111",
    name: "Computing Foundations: Data",
    category: "moderate",
    description:
      "Labs in groups 2-4, projects in pairs, individual homework with high-level discussion allowed",
    features: ["Group Labs", "Pair Projects", "Limited Discussion"],
    link: "https://hackmd.io/@cs111/syllabus-f24#Collaboration-Policy",
    details: "Structured collaboration with clear boundaries",
  },
  {
    id: "1730",
    name: "Design and Implementation of Programming Languages",
    category: "tiered",
    description:
      "Three-phase approach with varying collaboration levels throughout semester",
    features: ["Phased Collaboration", "Limited Discussion"],
    link: "https://cs.brown.edu/courses/csci1730/2024/policy.html#%28part._.Collaborative_.Work%29",
    details: "Collaboration rules change as semester progresses",
  },
  {
    id: "0020",
    name: "The Digital World",
    category: "strict",
    description: "Projects must be executed without any collaboration",
    features: ["No Collaboration", "Individual Work Only"],
    link: "https://cs.brown.edu/courses/csci0020/files/syllabus.pdf",
    details: "Strictly individual work required",
  },
  {
    id: "1670/1690/2670",
    name: "Operating Systems",
    category: "open",
    description:
      "Loose collaboration to encourage learning. Basic integrity required but no AI tools allowed.",
    features: ["Loose Collaboration", "AI Prohibited"],
    link: "https://docs.google.com/document/d/1PW1PUR_li4D965welzRrA0vVp4OUNbyJqEOFGzisLUY/edit?tab=t.0",
    details: "Discuss solutions freely but do not use AI tools.",
  },

  {
    id: "0200",
    name: "Program Design with Data Structures and Algorithms",
    category: "moderate",
    description:
      "Clear tiered policy with different rules for labs, homework, and projects.",
    features: ["Group Labs", "High-level Discussion", "Pair Projects"],
    link: "https://docs.cs200.io/collaboration-policy",
    details: "Each assignment has specific guidelines on do's and don'ts.",
  },

  {
    id: "0220",
    name: "Introduction to Discrete Structures and Probability",
    category: "moderate",
    description:
      "Encourages collaboration but requires independent write-ups with no shared notes or code.",
    features: ["Independent Write-ups", "Conceptual Discussion OK"],
    link: "https://brown-cs22.github.io/resources/course-documentation/collaboration-policy.pdf",
    details: "Strict policy on not sharing direct code or solutions.",
  },
  {
    id: "1440",
    name: "Algorithmic Game Theory",
    category: "moderate",
    description:
      "Encourages collaboration but requires independent write-ups with no shared notes or code.",
    features: ["Independent Write-ups", "Conceptual Discussion OK"],
    link: "https://brown-cs22.github.io/resources/course-documentation/collaboration-policy.pdf",
    details: "Strict policy on not sharing direct code or solutions.",
  },

  {
    id: "0112",
    name: "Computing Foundations: Program Organization",
    category: "moderate",
    description:
      "Labs in groups 2-4, small group projects, Drills alone, limited code sharing for homework debugging.",
    features: ["Labs in Groups", "Projects in Groups", "No Full Code Sharing"],
    link: "https://cs0112.github.io/Pages/course-missive.html",
    details:
      "Collaboration allowed for high-level discussion, but code must be your own.",
  },

  {
    id: "0300/1310",
    name: "Fundamentals of Computer Systems",
    category: "moderate",
    description:
      "Individual repos for each student, but discussion encouraged. Prohibits solutions from past years or AI usage.",
    features: ["Individual Repos", "Debugging Help OK", "No AI Tools"],
    link: "https://docs.google.com/document/d/1BNBG8TNlSS_Xc8dQhJjE04Qrp5chKZ5m2QoZ08Ei18o/edit?tab=t.0",
    details:
      "Must hand in your own code. Cite any references or debugging assistance.",
  },

  {
    id: "1230",
    name: "Introduction to Computer Graphics",
    category: "moderate",
    description:
      "Encourages community help in TA hours; allows AI usage with strict rules about what can be shared.",
    features: ["AI Allowed (with conditions)", "Community Support Encouraged"],
    link: "https://cs1230.graphics/docs/collaboration-policy",
    details: "All code must be your own or credited properly.",
  },
  {
    id: "1420",
    name: "Machine Learning",
    category: "moderate",
    description:
      'Features unique "collaborative hours" with relaxed policy. Strict outside those hours, no code sharing allowed.',
    features: ["Collaborative Hours", "Strict Outside Hours"],
    link: "https://cs1420.vercel.app/assets/docs/collaboration_policy.pdf",
    details: "Individual work required unless in designated hours.",
  },
  {
    id: "1460",
    name: "Computational Linguistics",
    category: "moderate",
    description:
      "Focuses on an honor system with more relaxed rules during TA hours, but core individual requirements remain.",
    features: ["Honor System", "Relaxed TA Hours Collaboration"],
    link: "https://drive.google.com/file/d/1I7H0WUW057NjaD9Hy1ZjyPGFOMKoxiwN/view",
    details: "Respect boundaries. Violations lead to academic discipline.",
  },
  {
    id: "1270",
    name: "Database Management Systems",
    category: "moderate",
    description:
      'Treats AI tools like classmates. "Collaboration Hours" exist, but no code sharing otherwise.',
    features: ["AI Tools = People", "No Code Sharing Outside Hours"],
    link: "https://docs.google.com/document/d/1vb7W-SbI79ClZNrzBm0Uyrk_GqZnSeCH/edit",
    details:
      "Each student must maintain an individual codebase, acknowledging any help or references.",
  },
  {
    id: "1430",
    name: "Computer Vision",
    category: "moderate",
    description:
      "Allows conceptual discussion but requires individual implementation and debugging on your own first.",
    features: ["Conceptual Discussion", "Individual Code"],
    link: "https://browncsci1430.github.io/#policies-content",
    details: "Can do extra credit with 3rd-party data, with proper citation.",
  },
  {
    id: "1680",
    name: "Computer Networks",
    category: "moderate",
    description:
      "Combines individual and pair project work with clear collaboration boundaries. Prohibits direct code sharing.",
    features: ["Pair Projects Allowed", "No Direct Code Sharing"],
    link: "https://brown-csci1680.github.io/content/collaboration.pdf",
    details: "Conceptual discussions and debugging help are okay.",
  },
  {
    id: "1951L",
    name: "Blockchain & Cryptocurrency",
    category: "moderate",
    description:
      "Encourages collaboration and debugging help on EdStem, but no code copying. TAs can question any line of code.",
    features: ["Collab on EdStem", "Debugging Encouraged", "No Copying Code"],
    link: "https://csci1951l-spring2024.vercel.app/",
    details:
      "Violations are subject to academic code. Must be able to explain your code.",
  },

  {
    id: "1951X",
    name: "Formal Proof & Verification",
    category: "moderate",
    description:
      "Erased whiteboard policy for homework. Encourages conceptual discussion, no direct copying.",
    features: ["Erased Whiteboard", "Conceptual Discussion"],
    link: "https://browncs1951x.github.io/static/files/syllabus.pdf",
    details: "Must write your own final solutions individually.",
  },

  {
    id: "1810",
    name: "Computational Molecular Biology",
    category: "moderate",
    description:
      "Three levels: written homework (discussion allowed), programming (semi-collaborative), exams (strict solo), no AI tools.",
    features: ["Varied Levels", "No AI Tools for Solutions"],
    link: "https://brown-cs181.github.io/quicklinks/2024_collab.pdf",
    details: "Clear rules on do's and don'ts for each type of assignment.",
  },

  {
    id: "1952Y",
    name: "Computer Architecture",
    category: "moderate",
    description:
      "High-level collaboration is fine; homework must be individual. AI usage governed by explicit rules.",
    features: ["High-level Collab", "Individual Homework", "AI with Boundaries"],
    link: "https://browncs1952y.github.io/syllabus.html",
    details: "Emphasizes synergy while upholding academic code.",
  },
  {
    id: "1952X",
    name: "Contemporary Digital Policy and Politics",
    category: "moderate",
    description:
      "Strongly encourages collaboration but requires individual write-ups.",
    features: ["High-level Collab", "Individual Homework", "AI with Boundaries"],
    link: "",
    details: "Emphasizes synergy while upholding academic code.",
  },

  {
    id: "1600",
    name: "Real-Time and Embedded Software",
    category: "moderate",
    description:
      "Encourages collaboration but demands personal work for specific assessments. Clear lines drawn between group vs. individual tasks.",
    features: ["Group vs. Individual Tasks", "No AI Tools for Some Work"],
    link: "https://brown-cs1600.github.io/information/#academic-integritycollaboration-policy",
    details: "Brown's Academic Code strongly enforced.",
  },

  {
    id: "1010",
    name: "Theory of Computation",
    category: "moderate",
    description:
      "Collaboration policy with discussion allowed, but must write up solutions alone. Violations lead to lowered course grade or more.",
    features: ["Discussion Allowed", "Individual Solutions"],
    link: "https://docs.google.com/document/d/1uARkFabi0ibhpdbPR8pyjkhutJJfuhFpCNMuhzhLU8k/edit?tab=t.0",
    details: "Zero score + grade cap if found violating once.",
  },
  {
    id: "1260",
    name: "Compilers and Program Analysis",
    category: "moderate",
    description:
      'Advocates “erased whiteboard” for homeworks. Drills alone, homeworks individually, debugging with classmates is allowed in small snippets.',
    features: ["Erased Whiteboard", "Individual Homework"],
    link: "https://browncs1260.github.io/static/files/syllabus.pdf",
    details:
      "Allowed short code snippets for debugging but not entire solutions.",
  },

  {
    id: "1510",
    name: "Introduction to Cryptography and Computer Security",
    category: "moderate",
    description:
      "Encourages collaboration but demands individual write-ups. Must acknowledge everyone who helps you.",
    features: ["Individual Write-ups", "Acknowledge All Help"],
    link: "https://docs.google.com/document/d/1lnRl0S-NMyobGlPBk2Lv8UuMkyGh0mNXOGPEwP3eJKk/edit?tab=t.0#heading=h.7gcsp3avqbqc",
    details: "No possession of others' solutions. Must be reproducible alone.",
  },
  {
    id: "1570",
    name: "Design and Analysis of Algorithms",
    category: "moderate",
    description:
      "Discussion of concepts is fine, but solutions must be written up by yourself. Violations have serious grade penalties.",
    features: ["Conceptual Discussion Only", "Solo Solutions"],
    link: "https://docs.google.com/document/d/1vebr8i-VyZn84ojDlUiz9iD7DnXHKe9WlbXTnzn1f9s/edit?tab=t.0",
    details:
      "First offense: zero on assignment + max grade B. Second offense: potential failing + code of conduct review.",
  },

  {
    id: "1710",
    name: "Logic for Systems",
    category: "tiered",
    description:
      "Distinguishes between individual and group work with clear phases. Encourages group projects but strict for homeworks.",
    features: ["Group Projects", "Solo Homework", "Phased Policy"],
    link: "https://docs.google.com/document/d/e/2PACX-1vQ7b5GLg6Kie0l4zzuLLQ7oaC89V931dqbHQl7Rgr7sVT05bIu1WrGTcNaGpn9gg5y9Tc7GvLS32vf1/pub",
    details: "Extensive collaboration on group phases, none on individual tasks.",
  },
  {
    id: "0150",
    name: "Introduction to Object-Oriented Programming and Computer Science",
    category: "strict",
    description:
      "Very structured policy with limited collaboration, designated AI assistant (ATA), and strong emphasis on individual work.",
    features: ["Limited Collaboration", "AI usage restricted to ATA"],
    link: "https://docs.google.com/document/d/10rbbd0Y6s1JUzPe8VmoWcL_Mz26XczX-i7p2LUFa9vc/edit?tab=t.0#heading=h.o0nwon5qvcc7",
    details:
      "Students must follow the official code or risk academic code sanctions.",
  },

  {
    id: "1951A",
    name: "Data Science",
    category: "strict",
    description:
      "No external AI usage. Must write solutions alone.",
    features: ["No AI Tools", "Solo Solutions Only"],
    link: "https://docs.google.com/document/d/1tCio9RyquY2x12yPNVkkp-7kozX0i0FbN6xZXslULBk/edit?tab=t.0",
    details:
      "Violations lead to zero on the assignment or failing, plus potential Code of Conduct referral.",
  },

  {
    id: "0190",
    name: "Accelerated Introduction to Computer Science",
    category: "strict",
    description:
      "Very limited collaboration allowances, focusing on independent work. Regret clause for accidental plagiarism.",
    features: ["Minimal Collaboration", "Regret Clause"],
    link: "https://cs.brown.edu/courses/csci0190/2024/policy.html#%28part._.Academic_.Integrity%29",
    details:
      "If you find yourself violating the policy, you can self-report quickly.",
  },

  {
    id: "1470",
    name: "Deep Learning",
    category: "strict",
    description:
      "Very strict policy. No code sharing. MOSS used to detect similarities. Offers 'regret clause' for self-reporting.",
    features: ["Strict No Sharing", "MOSS Checking", "Regret Clause"],
    link: "https://brown-deep-learning.github.io/dl-website-s24/syllabus.pdf",
    details:
      "Second offense leads to immediate escalation. Zero tolerance for code plagiarism.",
  },

  {
    id: "1760",
    name: "Multiprocessor Synchronization",
    category: "strict",
    description:
      "Allows discussion and research but prohibits obtaining direct answers from any source, including LLMs.",
    features: ["No LLM Solutions", "Conceptual Discussion OK"],
    link: "https://cs.brown.edu/courses/csci1760/course_information.shtml",
    details: "Focus on independent solution derivation.",
  },

  {
    id: "1950N",
    name: "2D Game Engines",
    category: "strict",
    description:
      "Strict code-sharing restrictions but allows asset sharing and debugging help. Specific rules on communication channels.",
    features: ["No Code Sharing", "Asset Sharing OK", "Debugging Allowed"],
    link: "https://docs.google.com/document/d/1Jbaq38ntgb2wIMY6Qy6Nl3K6tPb2xQwJi1l54nZX7w4/edit?tab=t.0#heading=h.gd4nj07lw70b",
    details: "High-level collaboration with staff, strict with peers.",
  },

  {
    id: "1250",
    name: "Introduction to Computer Animation",
    category: "project",
    description:
      "Encourages discussion for different projects. Tighter restrictions when all students work on the same project.",
    features: ["Discussion Encouraged", "Different/Shared Projects Vary"],
    link: "https://cs.brown.edu/courses/csci1250/courseinfo.html#15_line",
    details: "Students can critique each other's work, must do final themselves.",
  },

  {
    id: "1280",
    name: "Intermediate 3D Computer Animation",
    category: "project",
    description:
      "Similar to 1250 but with stricter rules about debugging others' work. Not allowed to drive software for someone else.",
    features: ["Stricter Debugging Rules", "No 'Driving' Another's Software"],
    link: "https://cs.brown.edu/courses/csci1280/courseinfo.html#15",
    details: "May critique, but the code/animation must be self-produced.",
  },

  {
    id: "1380",
    name: "Distributed Computer Systems",
    category: "project",
    description:
      "Different rules for individual milestones vs. group milestone M8. Final project/poster heavily collaborative.",
    features: ["Individual Early", "Group Later"],
    link: "https://docs.google.com/document/d/e/2PACX-1vT1W7YGtmrLtpmyEW8MRimmTeZdB0MF7IuiHSAopU722BHMtoAzPua7A-1YEXF2Watj34cx_p3oatA2/pub#h.gjjq2h31iyqa",
    details:
      "Collaboration intensifies in final phase. No code copying across groups.",
  },

  {
    id: "1515",
    name: "Applied Cryptography",
    category: "project",
    description:
      "Homeworks are solo, final project in pairs. Must always credit sources. No code sharing except final project partners.",
    features: ["Solo Homework", "Pairs for Final"],
    link: "https://docs.google.com/document/d/1lvXrMACua9Ma3n2nkLeiRmG-fmjDO1530h22EjkvQ-s/edit?tab=t.0#heading=h.o6vzje1rbnmo",
    details:
      "Violations involve partial accountability for both the sharer and the copier.",
  },

  {
    id: "1550",
    name: "Probabilistic Methods in Computer Science",
    category: "project",
    description:
      "All but last problem set can be done in 1-3 person groups. The final set is strictly individual with no collaboration.",
    features: ["Group Work Allowed", "Last PS Solo Only"],
    link: "https://cs.brown.edu/courses/csci1550/cs155-syllabus.pdf",
    details:
      "Everyone in group shares the same grade. No discussion with outsiders.",
  },

  {
    id: "1660",
    name: "Introduction to Computer Systems Security",
    category: "project",
    description:
      "Encourages teamwork with strict boundaries around security-related tasks. Has guidelines for AI tool usage.",
    features: ["Teamwork Encouraged", "Responsible AI Usage"],
    link: "https://brown-csci1660.github.io/files/docs/collaboration-policy.pdf",
    details: "Stay within the responsible security practices. Credit sources.",
  },

  {
    id: "0410/1411",
    name: "Foundations of AI",
    category: "project",
    description:
      "Allows conceptual AI help but prohibits direct code generation or copying. Project-based with flexible collaboration.",
    features: ["Conceptual AI Help Only", "No Code Copying"],
    link: "https://hackmd.io/@cs410/BknqjaNhR",
    details:
      "Focus on building your own solutions, group or solo as specified in assignments.",
  },

  {
    id: "1300",
    name: "Interaction Design",
    category: "project",
    description:
      "Encourages collaboration and AI usage with proper attribution, focusing on design. Must adhere to main policy if code is shared.",
    features: ["AI Allowed (with Citation)", "Group Collab Encouraged"],
    link: "https://docs.google.com/document/d/1dNxjMgJDAAZt1sV3LuvicdNiOdJoBZ7oUxvHcLiUaiM/edit?tab=t.0",
    details: "Properly credit all external ideas or assets.",
  },

  {
    id: "0170",
    name: "Computer Science: An Integrated Introduction",
    category: "strict",
    description:
      "Document link with collaboration details. Allows conceptual talk but not direct code sharing. Possibly no AI tools.",
    features: ["Conceptual Allowed", "No Code Copying"],
    link: "https://drive.google.com/file/d/1TCavmFLVdDpWfUuacB_MvxNnyxViRO44/view",
    details: "Check doc for specifics. Must follow academic code.",
  },
  {
    id: "1800",
    name: "Cybersecurity and International Relations",
    category: "strict",
    description:
      "Academic honesty strictly enforced. Avoid copying your own or others' code from prior submissions.",
    features: ["Strict Honesty", "No Re-use of Past Solutions"],
    link: "https://cs.brown.edu/courses/cs180/static/files/documents/CS1800_syllabus.pdf",
    details: "Violations lead to standard or severe academic code penalties.",
  },

];

const getFeatureIcon = (feature) => {
  switch (feature) {
    case "AI Allowed":
      return <Cpu size={16} className="text-green-500" />;
    case "Code Sharing OK":
      return <Code2 size={16} className="text-blue-500" />;
    case "Full Collaboration": 
      return <Users size={16} className="text-purple-500" />;
    case "No Collaboration":
      return <Lock size={16} className="text-red-500" />;
    case "Minimal Collaboration":
    case "Limited Collaboration":
    case "Limited Discussion":
      return <Lock size={16} className="text-yellow-500" />;
    case "No AI Tools":
      return <Cpu size={16} className="text-red-500 line-through" />;
    default:
      return <Book size={16} className="text-gray-500" />;
  }
};

const getCategoryColor = (category) => {
  switch (category) {
    case "open":
      return "border-green-500";
    case "moderate":
      return "border-yellow-500";
    case "tiered":
      return "border-blue-500";
    case "strict":
      return "border-red-500";
    case "project":
      return "border-purple-500";
    default:
      return "border-gray-500";
  }
};

const CollaborationDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex items-center gap-2 mb-2">
          <AlertCircle className="h-4 w-4 text-blue-500" />
          <h2 className="font-semibold">General Collaboration Guidelines</h2>
        </div>
        <ul className="list-disc pl-8 text-sm">
          <li>Always read the full course policy</li>
          <li>When in doubt, ask course staff</li>
          <li>Document all collaboration</li>
          <li>Never share or copy code directly without permission</li>
          <li>Be prepared to explain any work you submit</li>
          <li>
            <a
              href="https://college.brown.edu/design-your-education/academic-policies/academic-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Review Brown’s Academic Code
            </a>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search courses by number..."
            className="w-full pl-10 p-2 border rounded-md"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="p-2 border rounded-md"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          {Object.entries(categories).map(([key, value]) => (
            <option key={key} value={key}>
              {value}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            className={`
              bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow
              border-l-4 ${getCategoryColor(course.category)}
              p-4
            `}
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold">
                CS {course.id}: {course.name}
              </h3>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-2">{course.description}</p>
              {course.link && course.link.length > 0 && (
                <p className="text-sm mb-2">
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline hover:text-blue-800"
                  >
                    View Course Policy
                  </a>
                </p>
              )}
              <div className="flex flex-wrap gap-2 mt-2">
                {(course.features || []).map((feature, idx) => (
                  <span
                    key={idx}
                    className="flex items-center gap-1 text-xs bg-gray-100 px-2 py-1 rounded"
                  >
                    {getFeatureIcon(feature)}
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaborationDashboard;
