import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight, BookOpen, Users, Video, Layout, Globe, Bot, BarChart3, Link2, Award, Shield, Clock, MessageSquare } from "lucide-react";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            <div className="my-container mx-auto py-10 px-4">
                <div className="text-center mb-6">
                    <h1 className="text-4xl font-bold text-foreground mb-4">Upcoming Features</h1>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Explore our roadmap of exciting features designed to enhance your learning experience
                    </p>
                </div>
                <Tabs defaultValue="account" className="">
                    <div className="flex justify-center mb-6">
                        <TabsList className="w-max mx-auto">
                            <TabsTrigger value="account">List View</TabsTrigger>
                            <TabsTrigger value="password">Card View</TabsTrigger>
                        </TabsList>
                    </div>
                    <TabsContent value="account">
                        <UpcomingFeatures />
                    </TabsContent>
                    {/* card view */}
                    <TabsContent value="password">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {features.map((feature) => (
                                <Card key={feature.id} className="p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="p-2 rounded-lg bg-primary/10">
                                            {feature.icon}
                                        </div>
                                        <h2 className="text-xl font-semibold text-foreground">{feature.title}</h2>
                                    </div>
                                    <div className="space-y-3">
                                        {feature.items.map((item, index) => (
                                            <div key={index} className="flex items-start gap-2">
                                                <ChevronRight className="w-4 h-4 text-primary mt-1" />
                                                <p className="text-muted-foreground">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </Card>
                            ))}
                        </div>
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
                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">1. Personalized Learning Paths</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>AI-driven recommendations</strong>: Suggest courses, resources, or activities based on a learner's progress, preferences, and learning style.</li>
                            <li><strong>Goal setting and tracking</strong>: Allow users to set learning goals and monitor progress toward achieving them.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">2. Interactive and Engaging Learning</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Gamification elements</strong>: Use badges, points, levels, or leaderboards to motivate students.</li>
                            <li><strong>Live and recorded classes</strong>: Provide both live sessions for interaction and recorded sessions for flexibility.</li>
                            <li><strong>Interactive quizzes and assessments</strong>: Incorporate self-check quizzes, real-time feedback, and adaptive testing.</li>
                            <li><strong>Discussion forums and peer collaboration</strong>: Encourage community-building through student forums, study groups, and peer-to-peer messaging.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">3. Multimedia Learning Content</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Videos, PDFs, and interactive content</strong>: Offer lessons in various formats to cater to different learning preferences.</li>
                            <li><strong>Downloadable resources</strong>: Allow students to download course materials for offline study.</li>
                            <li><strong>AI-powered content summaries</strong>: Help students review long materials with AI-generated summaries or key points.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">4. User-friendly Interface and Navigation</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Responsive design</strong>: Ensure that the platform is mobile-friendly and performs well on tablets, phones, and desktops.</li>
                            <li><strong>Search functionality</strong>: Allow users to search courses, topics, or resources easily with intelligent filters.</li>
                            <li><strong>Clear course structure</strong>: Break courses into modules and lessons with clear progress indicators.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">5. Accessibility Features</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Multi-language support</strong>: Include options for content translation or subtitles in various languages.</li>
                            <li><strong>Closed captions and transcripts</strong>: Provide captions for videos and transcripts for audio-based content.</li>
                            <li><strong>Dark mode and font size options</strong>: Offer customization for visually impaired users or those who prefer alternative display settings.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">6. AI Tutors and Chatbots</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Virtual tutors</strong>: Integrate AI assistants that can answer questions, explain concepts, or suggest further learning materials.</li>
                            <li><strong>24/7 chatbot support</strong>: Provide students with constant access to help or troubleshooting assistance.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">7. Analytics for Instructors and Learners</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Performance analytics</strong>: Offer detailed analytics dashboards for both learners (to track their progress) and instructors (to understand engagement and learning trends).</li>
                            <li><strong>Assignment grading automation</strong>: Simplify the grading process with AI-driven evaluations and feedback generation.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">8. Seamless Integration with Other Tools</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Integration with LMS and productivity tools</strong>: Ensure compatibility with popular Learning Management Systems (LMS), Google Drive, Dropbox, and communication platforms like Slack.</li>
                            <li><strong>Third-party API integrations</strong>: Connect with external services such as payment gateways, calendar systems, and external libraries or repositories.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">9. Certificates and Recognition</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Completion certificates</strong>: Offer certifications for completing courses, which are verified and shareable on professional platforms like LinkedIn.</li>
                            <li><strong>Micro-credentials</strong>: Provide digital badges or micro-certifications for smaller achievements or skills.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">10. Security and Privacy</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Data encryption and security</strong>: Ensure user data is securely stored and protected.</li>
                            <li><strong>Compliance with regulations</strong>: Adhere to global standards like GDPR for data privacy and protection.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">11. Offline and Asynchronous Learning</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Offline access</strong>: Allow learners to download materials or pre-recorded lessons to access when offline.</li>
                            <li><strong>Asynchronous learning tools</strong>: Provide flexibility for learners to interact with content and complete activities at their own pace.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-semibold text-primary mb-4">12. Feedback and Improvement</h2>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Course reviews and ratings</strong>: Enable users to rate courses and provide feedback to help instructors improve content.</li>
                            <li><strong>Real-time polls and surveys</strong>: Allow students to provide immediate feedback after lessons or courses to measure effectiveness.</li>
                        </ul>
                    </section>
                </div>
            </div>
        </div>
    )
}


const features = [
    {
        id: 1,
        title: "Personalized Learning Paths",
        icon: <BookOpen className="w-5 h-5" />,
        items: [
            "AI-driven recommendations",
            "Goal setting and tracking"
        ]
    },
    {
        id: 2,
        title: "Interactive and Engaging Learning",
        icon: <Users className="w-5 h-5" />,
        items: [
            "Gamification elements",
            "Live and recorded classes",
            "Interactive quizzes and assessments",
            "Discussion forums and peer collaboration"
        ]
    },
    {
        id: 3,
        title: "Multimedia Learning Content",
        icon: <Video className="w-5 h-5" />,
        items: [
            "Videos, PDFs, and interactive content",
            "Downloadable resources",
            "AI-powered content summaries"
        ]
    },
    {
        id: 4,
        title: "User-friendly Interface and Navigation",
        icon: <Layout className="w-5 h-5" />,
        items: [
            "Responsive design",
            "Search functionality",
            "Clear course structure"
        ]
    },
    {
        id: 5,
        title: "Accessibility Features",
        icon: <Globe className="w-5 h-5" />,
        items: [
            "Multi-language support",
            "Closed captions and transcripts",
            "Dark mode and font size options"
        ]
    },
    {
        id: 6,
        title: "AI Tutors and Chatbots",
        icon: <Bot className="w-5 h-5" />,
        items: [
            "Virtual tutors",
            "24/7 chatbot support"
        ]
    },
    {
        id: 7,
        title: "Analytics for Instructors and Learners",
        icon: <BarChart3 className="w-5 h-5" />,
        items: [
            "Performance analytics",
            "Assignment grading automation"
        ]
    },
    {
        id: 8,
        title: "Seamless Integration with Other Tools",
        icon: <Link2 className="w-5 h-5" />,
        items: [
            "Integration with LMS and productivity tools",
            "Third-party API integrations"
        ]
    },
    {
        id: 9,
        title: "Certificates and Recognition",
        icon: <Award className="w-5 h-5" />,
        items: [
            "Completion certificates",
            "Micro-credentials"
        ]
    },
    {
        id: 10,
        title: "Security and Privacy",
        icon: <Shield className="w-5 h-5" />,
        items: [
            "Data encryption and security",
            "Compliance with regulations"
        ]
    },
    {
        id: 11,
        title: "Offline and Asynchronous Learning",
        icon: <Clock className="w-5 h-5" />,
        items: [
            "Offline access",
            "Asynchronous learning tools"
        ]
    },
    {
        id: 12,
        title: "Feedback and Improvement",
        icon: <MessageSquare className="w-5 h-5" />,
        items: [
            "Course reviews and ratings",
            "Real-time polls and surveys"
        ]
    }
];