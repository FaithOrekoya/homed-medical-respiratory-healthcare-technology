export interface NewsArticle {
  id: string;
  titleEn: string;
  titleZh: string;
  excerptEn: string;
  excerptZh: string;
  contentEn: string[];
  contentZh: string[];
  date: string;
  categoryEn: string;
  categoryZh: string;
  readTimeEn: string;
  readTimeZh: string;
  image: string;
  sourceUrl: string;
}

export const homedNewsArticles: NewsArticle[] = [
  {
    id: 'fime-2026',
    titleEn: 'HOMED @ FIME International Medical Expo: Empowering Every Breath',
    titleZh: '家瑞康@FIME：为每一次呼吸赋能',
    excerptEn:
      'HOMED Medical showcased its flagship FDA 510(k) and CE-MDR cleared respiratory devices at the Florida International Medical Expo (FIME) in Miami, connecting with hospital partners and distributors across 50+ countries.',
    excerptZh:
      '家瑞康医疗携便携式医用制氧机、手持微网雾化器及院端雾化系统重磅亮相美国迈阿密FIME国际医疗器械展，与全球50+国家的分销商深度接洽。',
    contentEn: [
      'At the 2026 Florida International Medical Expo (FIME) in Miami, Shenzhen Homed Medical Device Co., Ltd. presented its newest generation of respiratory healthcare solutions, including the ultra-compact POC-V5 portable oxygen concentrator and the Mini-Air handheld titanium mesh nebulizer series.',
      'International hospital clinicians and medical device procurement directors praised HOMED for its strict adherence to international regulatory standards, holding both US FDA 510(k) clearance and EU CE-MDR Class IIa certification.',
      'Over the three-day convention, HOMED finalized distribution agreements for the North American and Latin American regions, reinforcing our mission to make high-purity medical oxygen therapy and precision inhalation accessible worldwide.',
    ],
    contentZh: [
      '在2026年美国迈阿密FIME国际医疗器械展览会上，深圳市宏济医疗器械有限公司集中展出了新一代呼吸健康医疗设备，包括轻量化POC-V5便携式医用制氧机及Mini-Air手持微孔钛网雾化吸入系列。',
      '展会现场，来自美洲及全球各地的临床专家与采购代表对宏济医疗完备的国际资质（涵盖美国FDA 510(k)准入及欧盟CE-MDR Class IIa认证）给予了高度评价。',
      '期间，宏济医疗海外商务团队与多家知名区域分销机构签署了战略合作协议，进一步拓宽了美洲与全球50余国的呼吸健康营销服务网络。',
    ],
    date: '2026-06-20',
    categoryEn: 'Global Exhibitions',
    categoryZh: '全球展会',
    readTimeEn: '4 min read',
    readTimeZh: '4 分钟阅读',
    image: 'https://www.homedgroup.com/res/_cache/xinw/10/1053.jpg',
    sourceUrl: 'https://www.homedgroup.com/182.html',
  },
  {
    id: 'pediatric-sinus-2026',
    titleEn: 'Targeted Sinus Care: HOMED Opens New Clinical Airway Frontiers for Pediatric Asthma',
    titleZh: '靶向鼻窦‖家瑞康为儿童哮喘管理打开“新气道”',
    excerptEn:
      'Exploring combined upper and lower airway clinical protocols: HOMED’s isotonic saline nasal irrigation and ultra-fine micro-mesh atomization enhance pediatric asthma management and allergic mucosal recovery.',
    excerptZh:
      '深入探讨上气道-下气道联合诊疗方案，家瑞康医用级生理盐水鼻腔清洗与超细微网雾化协同，助力儿童呼吸健康精准干预。',
    contentEn: [
      'Clinical pediatric respiratory consensus emphasizes the "one airway, one disease" principle: chronic allergic rhinitis and sinusitis in children often trigger or aggravate bronchial asthma.',
      'HOMED Medical collaborated with leading pediatric respiratory centers to introduce a dual-action airway management pathway. By combining gentle 0.9% isotonic saline sinus irrigation with targeted micro-mesh aerosol delivery (MMAD < 3.5 μm), medication effectively reaches the deep tracheobronchial tree while mucosal inflammation is rapidly relieved.',
      'Clinical trials demonstrate that combined airway intervention significantly reduces the frequency of acute pediatric asthma episodes and improves daily pulmonary ventilation comfort.',
    ],
    contentZh: [
      '临床儿科呼吸共识强调“同一气道，同一疾病”理念：儿童过敏性鼻炎与鼻窦炎常常是诱发或加重支气管哮喘的关键上气道诱因。',
      '宏济医疗联合国内顶尖儿童呼吸专科中心，提出了“鼻腔清洗预处理 + 微网靶向雾化给药”的联合干预方案。通过温和0.9%等渗生理盐水冲洗清除粘膜过敏原，再配合中位粒径小于3.5微米的微网吸入给药，药液直达下呼吸道病灶。',
      '临床追踪表明，该联合护理方案有效降低了儿童哮喘急性发作频率，显著改善了患儿的通气舒畅度与依从性。',
    ],
    date: '2026-04-09',
    categoryEn: 'Clinical Innovations',
    categoryZh: '临床突破',
    readTimeEn: '5 min read',
    readTimeZh: '5 分钟阅读',
    image: 'https://www.homedgroup.com/res/_cache/xinw/10/1040.jpg',
    sourceUrl: 'https://www.homedgroup.com/181.html',
  },
  {
    id: 'semi-annual-2026',
    titleEn: 'Breaking Through with Quality: HOMED Medical 2026 Strategic Semi-Annual Review',
    titleZh: '凝心攻坚破困局，提质稳单启新程——家瑞康医疗2026半年度会议',
    excerptEn:
      'Reviewing production quality achievements across our Dongguan Class 100,000 GMPC cleanroom campus, scaling annual manufacturing capacity to 2 million respiratory units and strengthening global client partnerships.',
    excerptZh:
      '全面总结东莞十万级GMPC智能制造基地的质控精益升级与年产200万台呼吸设备的交付成果，稳步推进全球化产业链布局。',
    contentEn: [
      'During the 2026 Semi-Annual Strategy Meeting held at our Dongguan Manufacturing Center, executive leadership highlighted HOMED’s continuous investments in smart automated SMT lines and high-precision airflow testing chambers.',
      'Over the past six months, HOMED achieved a 99.8% first-pass production yield and expanded certified supply agreements with multinational pharmaceutical leaders including AstraZeneca.',
      'Looking into the second half of 2026, HOMED will accelerate the clinical rollout of its hospital intelligent nebulization stations and next-generation quiet stationary oxygen concentrators.',
    ],
    contentZh: [
      '在东莞制造基地召开的2026年半年度战略总结会议上，公司高管团队系统复盘了智能化SMT贴片流水线升级及高精度气流全检车间的运行表现。',
      '上半年宏济医疗实现了99.8%的产品一次装配下线合格率，并进一步深化了与阿斯利康等跨国药企巨头的合规配套生产合作。',
      '下半年，宏济医疗将重点加速医院智能集中雾化工作站与全新一代超静音台式制氧机在海内外重点市场的装机落地。',
    ],
    date: '2026-07-22',
    categoryEn: 'Corporate Milestones',
    categoryZh: '宏济发展',
    readTimeEn: '3 min read',
    readTimeZh: '3 分钟阅读',
    image: 'https://www.homedgroup.com/res/_cache/xinw/10/1068.jpg',
    sourceUrl: 'https://www.homedgroup.com/184.html',
  },
  {
    id: 'arab-health-2026',
    titleEn: 'Arab Health Dubai: HOMED Demonstrates Chinese Medical Device Innovation Globally',
    titleZh: '征战迪拜‖家瑞康岁末出海，展示中国医疗创新实力',
    excerptEn:
      'HOMED Medical participated in Arab Health Dubai, showcasing innovative respiratory diagnostics, stationary oxygen stations, and cleanroom precision engineering to the Middle East and African markets.',
    excerptZh:
      '家瑞康医疗跨越重洋亮相中东迪拜Arab Health国际医疗盛会，全面展示中国自主智造的高精度医用制氧与智能化雾化全场景方案。',
    contentEn: [
      'At Arab Health in Dubai, one of the world’s largest healthcare trade exhibitions, HOMED Medical stood out with its integrated portfolio of respiratory therapy and diagnostic equipment.',
      'International hospital representatives from UAE, Saudi Arabia, and North Africa explored HOMED’s central atomization management system, noting its proven efficacy in large pediatric facilities across Asia.',
      'HOMED continues to expand localized service networks and regulatory registrations across the Middle East, bringing certified, cost-effective clinical respiratory technology to emerging healthcare ecosystems.',
    ],
    contentZh: [
      '在迪拜举行的Arab Health全球顶级医疗博览会上，宏济医疗携全线呼吸诊疗及慢病筛查器械惊艳亮相。',
      '来自阿联酋、沙特阿拉伯及北非的医疗机构代表详细考察了宏济院端智能中心雾化工作站，对国内大型三甲儿童医院的成熟落地经验给予了充分肯定。',
      '宏济医疗正加速推进中东及北非区域的本地化技术服务网络搭建，为新兴市场持续输出具备国际顶尖认证与卓越性价比的医用呼吸装备。',
    ],
    date: '2026-02-10',
    categoryEn: 'Global Exhibitions',
    categoryZh: '全球展会',
    readTimeEn: '4 min read',
    readTimeZh: '4 分钟阅读',
    image: 'https://www.homedgroup.com/res/_cache/xinw/97/972.jpg',
    sourceUrl: 'https://www.homedgroup.com/177.html',
  },
  {
    id: 'nasal-care-standards',
    titleEn: 'Natural Purity: Redefining Medical Nasal Care Standards with Mineral Salt Science',
    titleZh: '青海茶卡湖盐‖以天然纯净，定义鼻腔护理新标准',
    excerptEn:
      'Introducing pure natural mineral salt formulations for 0.9% physiological isotonic nasal irrigation, protecting respiratory mucosa with clinical-grade safety and pharmaceutical quality assurance.',
    excerptZh:
      '以纯净高品质天然矿物盐源赋能0.9%医用等渗配方，温和深层清洁鼻腔粘膜，为过敏性鼻炎患者带来全新医用级护理体验。',
    contentEn: [
      'Airway mucosal health begins with the upper respiratory barrier. HOMED introduced its clinical-grade isotonic nasal wash salts derived from high-altitude unpolluted natural mineral salt beds.',
      'Featuring balanced trace mineral ions and an optimal 0.9% physiological osmolarity, the solution preserves nasal mucosal ciliary movement without burning or discomfort.',
      'Packaged in certified sterile pharmaceutical-grade sachets, the formula seamlessly pairs with HOMED NI-80 adjustable nasal irrigators for everyday allergic rhinitis management.',
    ],
    contentZh: [
      '呼吸道粘膜健康始于上呼吸道屏障。宏济医疗推出取材于高海拔纯净盐源的医用级鼻腔清洗盐系列产品。',
      '产品富含天然微量矿物元素，精准维持0.9%生理等渗渗透压，在温和清洁鼻腔分泌物的同时保护纤毛正常运动，温和无刺痛。',
      '该产品采用医药级独立防潮铝箔包装，与宏济NI-80可调式鼻腔冲洗器配套使用，为鼻窦炎及过敏性鼻炎人群提供全方位的日常温和养护。',
    ],
    date: '2026-03-30',
    categoryEn: 'Product Innovations',
    categoryZh: '新品发布',
    readTimeEn: '4 min read',
    readTimeZh: '4 分钟阅读',
    image: 'https://www.homedgroup.com/res/_cache/xinw/10/1035.jpg',
    sourceUrl: 'https://www.homedgroup.com/180.html',
  },
  {
    id: 'mid-autumn-2026',
    titleEn: 'HOMED: Mid-Autumn Festival Care & Global Health Commitment',
    titleZh: '家瑞康与你，共赴月圆时光',
    excerptEn:
      'On the occasion of the Mid-Autumn Festival, HOMED Medical extends warm greetings to our global partners, dedicated engineers, and clinical caregivers who safeguard respiratory health day and night.',
    excerptZh:
      '金秋送暖，岁岁团圆。宏济医疗向长期携手同行的全球合作伙伴、海内外临床医护及坚守制造一线的研发工程团队致以诚挚的节日问候。',
    contentEn: [
      'Mid-Autumn Festival symbolizes union, gratitude, and care. Behind every reliable HOMED device is the tireless commitment of our Shenzhen R&D engineers and Dongguan production specialists.',
      'As we reflect on our milestones across 50+ countries, HOMED continues to honor its founding ethos: putting patient safety, technological innovation, and heartfelt clinical care at the center of everything we do.',
      'We thank our global distribution network and clinical partners for trusting HOMED as their respiratory healthcare manufacturing ally.',
    ],
    contentZh: [
      '明月中天，情暖万家。每一台平稳运转的宏济制氧机与雾化器背后，都凝结着深圳研发团队与东莞洁净车间全体匠人的严谨坚守。',
      '回望远销海外50余国的足迹，宏济医疗始终秉持“科技守护呼吸健康”的初心使命，以精益工艺守护每一次顺畅呼吸。',
      '感谢全球医疗同仁与分销伙伴的信任同行，宏济医疗愿与海内外朋友携手共进，筑梦更美好的呼吸健康未来。',
    ],
    date: '2026-09-23',
    categoryEn: 'Corporate Culture',
    categoryZh: '宏济关怀',
    readTimeEn: '3 min read',
    readTimeZh: '3 分钟阅读',
    image: 'https://www.homedgroup.com/res/_cache/xinw/10/1072.jpg',
    sourceUrl: 'https://www.homedgroup.com/185.html',
  },
];
