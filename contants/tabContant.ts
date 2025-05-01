export interface ToolDetails {
  category: "sales" | "research" | "featured" | "marketing"; // Kategoriler burada belirleniyor
  icon?: string;
}

export const toolRegistry: { [key: string]: ToolDetails } = {
  // Satış Araçları
  hrResumeComparer: { icon: "📄", category: "sales" },
  hrLinkedinComparer: { icon: "🔗", category: "sales" },
  personalizedMsgGenerator: { icon: "✉️", category: "sales" },
  extractTranscriptData: { icon: "📑", category: "sales" },
  spinSelling: { icon: "🌀", category: "sales" },
  keyBenefits: { icon: "💡", category: "sales" },
  improveCopy: { icon: "✍️", category: "sales" },
  industryResearch: { icon: "📊", category: "sales" },
  leadEnrichment: { icon: "👤", category: "sales" },
  researchCompany: { icon: "🏢", category: "sales" },
  companyResearchWebsite: { icon: "🌐", category: "sales" },
  summarizeMeeting: { icon: "📝", category: "sales" },
  coldCallScript: { icon: "📞", category: "sales" },
  leadScoring: { icon: "📈", category: "sales" },
  companyResearchLinkedin: { icon: "🔍", category: "sales" },

  // Araştırma Araçları
  googleSearch: { icon: "🔍", category: "research" },
  categorizeText: { icon: "🏷️", category: "research" },
  steamReviewAnalysis: { icon: "🎮", category: "research" },
  surveyGenerator: { icon: "📝", category: "research" },
  audioTranscription: { icon: "🎧", category: "research" },
  detectSurveyBiases: { icon: "⚖️", category: "research" },
  gptOnFiles: { icon: "📂", category: "research" },
  syntheticUserResearch: { icon: "🧪", category: "research" },
  emotionAnalysis: { icon: "😊", category: "research" },
  convertSpelling: { icon: "🇬🇧🇺🇸", category: "research" },
  extractTopics: { icon: "🧠", category: "research" },
  iOSReviewAnalysis: { icon: "📱", category: "research" },
  extractCategories: { icon: "🗂️", category: "research" },
  googlePlaystoreAnalysis: { icon: "📲", category: "research" },
  anonymizeText: { icon: "🙈", category: "research" },

  // Öne Çıkan Araçlar
  youtubeVideoFile: { icon: "🎥", category: "featured" },
  youtubeVideoTranscript: { icon: "📝", category: "featured" },
  linearTickets: { icon: "🎟️", category: "featured" },
  azureFormRecognizer: { icon: "📑", category: "featured" },
  snowflakeSql: { icon: "❄️", category: "featured" },
  escalateSlack: { icon: "⚡", category: "featured" },
  googleCloudVision: { icon: "☁️", category: "featured" },
  airtableToolkit: { icon: "🛠️", category: "featured" },
  postToSlack: { icon: "💬", category: "featured" },

  // Pazarlama Araçları
  linkedinPosts: { icon: "🔗", category: "marketing" },
  compareWebpages: { icon: "🔄", category: "marketing" },
  youtubeVideo: { icon: "▶️", category: "marketing" },
  propertyListing: { icon: "🏠", category: "marketing" },
  getFeedback: { icon: "👍", category: "marketing" },
  socialShare: { icon: "📱", category: "marketing" },
  brandIdentity: { icon: "🏢", category: "marketing" },
  aidaFramework: { icon: "🎯", category: "marketing" },
  wordpressToolkit: { icon: "📝", category: "marketing" },
  pasFramework: { icon: "⚠️", category: "marketing" },
  webflowToolkit: { icon: "🌊", category: "marketing" },
  babFramework: { icon: "📊", category: "marketing" },
};
