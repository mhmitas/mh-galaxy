import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, Star } from "lucide-react";
import { MdStar, MdStarPurple500 } from "react-icons/md";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="my-container mx-auto py-10 px-4">
                <div className="text-center mb-4 md:mb-6">
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2 md:mb-4">Upcoming Features</h1>
                    <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
                        Explore our roadmap of exciting features designed to enhance your learning experience
                    </p>
                </div>
                <Tabs defaultValue="account" className="">
                    <div className="flex justify-center mb-6">
                        <TabsList className="w-max mx-auto h-8 sm:h-10 *:py-1 sm:py-1.5 *:text-xs sm:text-sm">
                            <TabsTrigger value="account">List View</TabsTrigger>
                            <TabsTrigger value="password">Card View</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="account">
                        <UpcomingFeatures />
                    </TabsContent>
                    {/* card view */}
                    <TabsContent value="password">
                        <UpcomingFeatureCards />
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default Index;

function UpcomingFeatures() {
    return (
        <div className="">
            <div className="max-w-4xl mx-auto">
                <div className="space-y-8">
                    {
                        features.map(feature => (
                            <section key={feature.id}>
                                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">{feature.title}</h2>
                                <ul className="list-decimal pl-6 space-y-2 text-sm md:text-base text-foreground/80">
                                    {
                                        feature.items.map(item => (
                                            <li key={item.id} className=""><strong>{item.name}</strong>: {item.description}</li>
                                        ))
                                    }
                                </ul>
                            </section>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

function UpcomingFeatureCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
                <Card key={feature.id} className="p-4 md:p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                            <MdStarPurple500 />
                        </div>
                        <h2 className="text-lg sm:text-xl font-semibold text-foreground">{feature.title}</h2>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                        {feature.items.map((item, index) => (
                            <div key={index} className="flex items-start gap-2">
                                <ChevronRight className="w-4 h-4 text-primary mt-1" />
                                <p className="text-foreground text-sm sm:text-base">{item.name}</p>
                            </div>
                        ))}
                    </div>
                </Card>
            ))}
        </div>
    )
}

const features = [
    {
        id: 1,
        title: "Personalized Learning Paths",
        items: [
            { id: 1.1, name: "AI-driven recommendations", description: "Suggest courses, resources, or activities based on a learner's progress, preferences, and learning style." },
            { id: 1.2, name: "Goal setting and tracking", description: "Allow users to set learning goals and monitor progress toward achieving them." }
        ]
    },
    {
        id: 2,
        title: "Interactive and Engaging Learning",
        items: [
            { id: 2.1, name: "Gamification elements", description: "Use badges, points, levels, or leaderboards to motivate students." },
            { id: 2.2, name: "Live and recorded classes", description: "Provide both live sessions for interaction and recorded sessions for flexibility." },
            { id: 2.3, name: "Interactive quizzes and assessments", description: "Incorporate self-check quizzes, real-time feedback, and adaptive testing." },
            { id: 2.4, name: "Discussion forums and peer collaboration", description: "Encourage community-building through student forums, study groups, and peer-to-peer messaging." }
        ]
    },
    {
        id: 3,
        title: "Multimedia Learning Content",
        items: [
            { id: 3.1, name: "Videos, PDFs, and interactive content", description: "Offer lessons in various formats to cater to different learning preferences." },
            { id: 3.2, name: "Downloadable resources", description: "Allow students to download course materials for offline study." },
            { id: 3.3, name: "AI-powered content summaries", description: "Help students review long materials with AI-generated summaries or key points." }
        ]
    },
    {
        id: 4,
        title: "User-friendly Interface and Navigation",
        items: [
            { id: 4.1, name: "Responsive design", description: "Ensure that the platform is mobile-friendly and performs well on tablets, phones, and desktops." },
            { id: 4.2, name: "Search functionality", description: "Allow users to search courses, topics, or resources easily with intelligent filters." },
            { id: 4.3, name: "Clear course structure", description: "Break courses into modules and lessons with clear progress indicators." }
        ]
    },
    {
        id: 5,
        title: "Accessibility Features",
        items: [
            { id: 5.1, name: "Multi-language support", description: "Include options for content translation or subtitles in various languages." },
            { id: 5.2, name: "Closed captions and transcripts", description: "Provide captions for videos and transcripts for audio-based content." },
            { id: 5.3, name: "Dark mode and font size options", description: "Offer customization for visually impaired users or those who prefer alternative display settings." }
        ]
    },
    {
        id: 6,
        title: "AI Tutors and Chatbots",
        items: [
            { id: 6.1, name: "Virtual tutors", description: "Integrate AI assistants that can answer questions, explain concepts, or suggest further learning materials." },
            { id: 6.2, name: "24/7 chatbot support", description: "Provide students with constant access to help or troubleshooting assistance." }
        ]
    },
    {
        id: 7,
        title: "Analytics for Instructors and Learners",
        items: [
            { id: 7.1, name: "Performance analytics", description: "Offer detailed analytics dashboards for both learners (to track their progress) and instructors (to understand engagement and learning trends)." },
            { id: 7.2, name: "Assignment grading automation", description: "Simplify the grading process with AI-driven evaluations and feedback generation." }
        ]
    },
    {
        id: 8,
        title: "Seamless Integration with Other Tools",
        items: [
            { id: 8.1, name: "Integration with LMS and productivity tools", description: "Ensure compatibility with popular Learning Management Systems (LMS), Google Drive, Dropbox, and communication platforms like Slack." },
            { id: 8.2, name: "Third-party API integrations", description: "Connect with external services such as payment gateways, calendar systems, and external libraries or repositories." }
        ]
    },
    {
        id: 9,
        title: "Certificates and Recognition",
        items: [
            { id: 9.1, name: "Completion certificates", description: "Offer certifications for completing courses, which are verified and shareable on professional platforms like LinkedIn." },
            { id: 9.2, name: "Micro-credentials", description: "Provide digital badges or micro-certifications for smaller achievements or skills." }
        ]
    },
    {
        id: 10,
        title: "Security and Privacy",
        items: [
            { id: 10.1, name: "Data encryption and security", description: "Ensure user data is securely stored and protected." },
            { id: 10.2, name: "Compliance with regulations", description: "Adhere to global standards like GDPR for data privacy and protection." }
        ]
    },
    {
        id: 11,
        title: "Offline and Asynchronous Learning",
        items: [
            { id: 11.1, name: "Offline access", description: "Allow learners to download materials or pre-recorded lessons to access when offline." },
            { id: 11.2, name: "Asynchronous learning tools", description: "Provide flexibility for learners to interact with content and complete activities at their own pace." }
        ]
    },
    {
        id: 12,
        title: "Feedback and Improvement",
        items: [
            { id: 12.1, name: "Course reviews and ratings", description: "Enable users to rate courses and provide feedback to help instructors improve content." },
            { id: 12.2, name: "Real-time polls and surveys", description: "Allow students to provide immediate feedback after lessons or courses to measure effectiveness." }
        ]
    }
];
