// AUTO-GENERATED — Do not edit manually

export interface QuizOption {
  key: string;
  text: string;
}

export interface QuizItem {
  question: string;
  options: QuizOption[];
  answer: string;
  explanation: string;
}

export interface ScienceVideo {
  title: string;
  url: string;
}

export interface Course {
  id: number;
  title: string;
  lessonNum: number;
  module: string;
  intro: string;
  keyPoints: string[];
  coverImage: string;
  knowledgeImages: string[];
  picturebookVideos: string[];
  scienceVideos: ScienceVideo[];
  gamePath: string;
  quiz: QuizItem[];
}

export const courses: Course[] = [
  {
    "id": 1,
    "title": "小侦探找线索",
    "lessonNum": 1,
    "module": "模块A｜信息从哪里来",
    "intro": "第1课「小侦探找线索」的AI启蒙故事",
    "keyPoints": ["能帮我们解决问题、做出决定的线索，就是信息", "侦探四步法：观察→找线索→收信息→判断", "线索越多，信息越全，判断越准确", "人靠信息变聪明，AI靠信息会思考"],
    "coverImage": "./assets/covers/AI启蒙绘本_第01课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/01/01.jpg", "./assets/knowledge/01/02.jpg", "./assets/knowledge/01/03.jpg", "./assets/knowledge/01/04.jpg"],
    "picturebookVideos": ["assets/videos/01/AI启蒙绘本_第1课_小侦探找线索_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "到底什么是人工智能？",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=1&autoplay=1"
      },
      {
        "title": "计算机早期历史",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=1&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index01.html",
    "quiz": [
  {
    "question": "《小侦探找线索》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "信息"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习信息对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于信息，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 2,
    "title": "开关城的两兄弟",
    "lessonNum": 2,
    "module": "模块A｜信息从哪里来",
    "intro": "第2课「开关城的两兄弟」的AI启蒙故事",
    "keyPoints": ["计算机使用0和1两个数字来表示所有信息", "0代表关，1代表开，就像开关一样", "二进制是计算机的语言基础", "所有的数字、文字、图片都能用0和1表示"],
    "coverImage": "./assets/covers/AI启蒙绘本_第02课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/02/01.jpg", "./assets/knowledge/02/02.jpg", "./assets/knowledge/02/03.jpg", "./assets/knowledge/02/04.jpg"],
    "picturebookVideos": ["assets/videos/02/AI启蒙绘本_第2课_开关城的两兄弟_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "二进制表示数据",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=4&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index02.html",
    "quiz": [
  {
    "question": "《开关城的两兄弟》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "二进制"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习二进制对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于二进制，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 3,
    "title": "小邮差的密码信",
    "lessonNum": 3,
    "module": "模块B｜编码与压缩",
    "intro": "第3课「小邮差的密码信」的AI启蒙故事",
    "keyPoints": ["信息可以被编码和加密", "密码是一种信息保护方式", "AI也需要对信息进行编码处理", "安全传递信息是现代通信的重要内容"],
    "coverImage": "./assets/covers/AI启蒙绘本_第03课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/03/01.jpg", "./assets/knowledge/03/02.jpg", "./assets/knowledge/03/03.jpg", "./assets/knowledge/03/04.jpg"],
    "picturebookVideos": ["assets/videos/03/AI启蒙绘本_第3课_小邮差的密码信_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "加密技术原理",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=33&autoplay=1"
      },
      {
        "title": "二进制表示数据",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=4&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index03.html",
    "quiz": [
  {
    "question": "《小邮差的密码信》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "加密"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习加密对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于加密，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 4,
    "title": "仓库管理员机器人",
    "lessonNum": 4,
    "module": "模块B｜编码与压缩",
    "intro": "第4课「仓库管理员机器人」的AI启蒙故事",
    "keyPoints": ["数据需要被存储在某个地方", "计算机有不同类型的存储空间", "内存是临时存储，硬盘是永久存储", "AI需要大量存储空间来保存学习数据"],
    "coverImage": "./assets/covers/AI启蒙绘本_第04课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/04/01.jpg", "./assets/knowledge/04/02.jpg", "./assets/knowledge/04/03.jpg", "./assets/knowledge/04/04.jpg"],
    "picturebookVideos": ["assets/videos/04/AI启蒙绘本_第4课_仓库管理员机器人_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "寄存器和内存",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=6&autoplay=1"
      },
      {
        "title": "内存与储存介质",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=19&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index04.html",
    "quiz": [
  {
    "question": "《仓库管理员机器人》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "存储"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习存储对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于存储，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 5,
    "title": "小方块拼出大世界",
    "lessonNum": 5,
    "module": "模块C｜图像表示",
    "intro": "第5课「小方块拼出大世界」的AI启蒙故事",
    "keyPoints": ["图像是由很多小方块（像素）组成的", "像素越多，图片越清晰", "计算机把图像分解成数字来处理", "AI通过分析像素来识别图像"],
    "coverImage": "./assets/covers/AI启蒙绘本_第05课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/05/01.jpg", "./assets/knowledge/05/02.jpg", "./assets/knowledge/05/03.jpg", "./assets/knowledge/05/04.jpg"],
    "picturebookVideos": ["assets/videos/05/AI启蒙绘本_第5课_小方块拼出大世界_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "屏幕与2D图形显示",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=23&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index05.html",
    "quiz": [
  {
    "question": "《小方块拼出大世界》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "像素"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习像素对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于像素，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 6,
    "title": "红绿蓝灯的合唱团",
    "lessonNum": 6,
    "module": "模块C｜图像表示",
    "intro": "第6课「红绿蓝灯的合唱团」的AI启蒙故事",
    "keyPoints": ["红绿蓝三种颜色可以混合出所有颜色", "计算机用RGB数值表示颜色", "颜色也是一种可以被计算的数据", "AI能够识别和处理彩色图像"],
    "coverImage": "./assets/covers/AI启蒙绘本_第06课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/06/01.jpg", "./assets/knowledge/06/02.jpg", "./assets/knowledge/06/03.jpg", "./assets/knowledge/06/04.jpg"],
    "picturebookVideos": ["assets/videos/06/AI启蒙绘本_第6课_红绿蓝灯的合唱团_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "AI是怎样识别人脸的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=5&autoplay=1"
      },
      {
        "title": "屏幕与2D图形显示",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=23&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index06.html",
    "quiz": [
  {
    "question": "《红绿蓝灯的合唱团》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "RGB颜色"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习RGB颜色对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于RGB颜色，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 7,
    "title": "行李箱装不下啦",
    "lessonNum": 7,
    "module": "模块C｜图像表示",
    "intro": "第7课「行李箱装不下啦」的AI启蒙故事",
    "keyPoints": ["数据可以被压缩，节省存储空间", "压缩就是找到规律，减少重复", "解压缩能还原原始数据", "AI处理大量数据时需要高效的压缩技术"],
    "coverImage": "./assets/covers/AI启蒙绘本_第07课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/07/01.jpg", "./assets/knowledge/07/02.jpg", "./assets/knowledge/07/03.jpg", "./assets/knowledge/07/04.jpg"],
    "picturebookVideos": ["assets/videos/07/AI启蒙绘本_第7课_行李箱装不下啦_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "文件与文件系统",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=20&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index07.html",
    "quiz": [
  {
    "question": "《行李箱装不下啦》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "数据压缩"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习数据压缩对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于数据压缩，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 8,
    "title": "雾气里的照片",
    "lessonNum": 8,
    "module": "模块C｜图像表示",
    "intro": "第8课「雾气里的照片」的AI启蒙故事",
    "keyPoints": ["图像可能含有噪点需要处理", "降噪让图像更清晰", "AI可以自动修复模糊的图像", "图像处理是计算机视觉的基础"],
    "coverImage": "./assets/covers/AI启蒙绘本_第08课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/08/01.jpg", "./assets/knowledge/08/02.jpg", "./assets/knowledge/08/03.jpg", "./assets/knowledge/08/04.jpg", "./assets/knowledge/08/05.jpg"],
    "picturebookVideos": ["assets/videos/08/AI启蒙绘本_第8课_雾气里的照片_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "AI是怎样识别人脸的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=5&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index08.html",
    "quiz": [
  {
    "question": "《雾气里的照片》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "图像处理"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习图像处理对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于图像处理，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 9,
    "title": "红灯停绿灯行",
    "lessonNum": 9,
    "module": "模块D｜算法入门",
    "intro": "第9课「红灯停绿灯行」的AI启蒙故事",
    "keyPoints": ["if-else是最基础的判断逻辑", "条件判断让程序能根据情况做不同的事", "交通灯就是条件判断的例子", "AI的决策也基于大量的条件判断"],
    "coverImage": "./assets/covers/AI启蒙绘本_第09课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/09/01.jpg", "./assets/knowledge/09/02.jpg", "./assets/knowledge/09/03.jpg", "./assets/knowledge/09/04.jpg"],
    "picturebookVideos": ["assets/videos/09/AI启蒙绘本_第9课_红灯停绿灯行_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "布尔逻辑与逻辑电路",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=3&autoplay=1"
      },
      {
        "title": "算法初步",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=13&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index09.html",
    "quiz": [
  {
    "question": "《红灯停绿灯行》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "条件判断"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习条件判断对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于条件判断，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 10,
    "title": "会数数的刷牙机器人",
    "lessonNum": 10,
    "module": "模块D｜算法入门",
    "intro": "第10课「会数数的刷牙机器人」的AI启蒙故事",
    "keyPoints": ["循环让程序自动重复做某件事", "计数循环知道要重复几次", "循环是提高效率的重要方法", "AI训练时会循环处理大量数据"],
    "coverImage": "./assets/covers/AI启蒙绘本_第10课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/10/01.jpg", "./assets/knowledge/10/02.jpg", "./assets/knowledge/10/03.jpg", "./assets/knowledge/10/04.jpg", "./assets/knowledge/10/05.jpg"],
    "picturebookVideos": ["assets/videos/10/AI启蒙绘本_第10课_会数数的刷牙机器人_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "算法初步",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=13&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index10.html",
    "quiz": [
  {
    "question": "《会数数的刷牙机器人》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "循环"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习循环对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于循环，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 11,
    "title": "做披萨的流水线",
    "lessonNum": 11,
    "module": "模块D｜算法入门",
    "intro": "第11课「做披萨的流水线」的AI启蒙故事",
    "keyPoints": ["算法是解决问题的步骤方法", "流程图能清晰展示算法步骤", "好的算法能高效解决问题", "AI的核心就是各种精妙的算法"],
    "coverImage": "./assets/covers/AI启蒙绘本_第11课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/11/01.jpg", "./assets/knowledge/11/02.jpg", "./assets/knowledge/11/03.jpg", "./assets/knowledge/11/04.jpg"],
    "picturebookVideos": ["assets/videos/11/AI启蒙绘本_第11课_做披萨的流水线_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "算法初步",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=13&autoplay=1"
      },
      {
        "title": "指令和程序",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=8&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index11.html",
    "quiz": [
  {
    "question": "《做披萨的流水线》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "算法流程"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习算法流程对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于算法流程，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 12,
    "title": "找bug的小修理工",
    "lessonNum": 12,
    "module": "模块D｜算法入门",
    "intro": "第12课「找bug的小修理工」的AI启蒙故事",
    "keyPoints": ["程序中的错误叫做bug", "调试（debug）是找到并修复错误的过程", "耐心检查每一步是调试的关键", "AI系统也需要不断调试和优化"],
    "coverImage": "./assets/covers/AI启蒙绘本_第12课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/12/01.jpg", "./assets/knowledge/12/02.jpg", "./assets/knowledge/12/03.jpg", "./assets/knowledge/12/04.jpg", "./assets/knowledge/12/05.jpg"],
    "picturebookVideos": ["assets/videos/12/AI启蒙绘本_第12课_找bug的小修理工_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "软件工程",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=16&autoplay=1"
      },
      {
        "title": "算法初步",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=13&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index12.html",
    "quiz": [
  {
    "question": "《找bug的小修理工》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "调试"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习调试对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于调试，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 13,
    "title": "袜子大整理",
    "lessonNum": 13,
    "module": "模块E｜数据排序分类",
    "intro": "第13课「袜子大整理」的AI启蒙故事",
    "keyPoints": ["分类是把相似的东西归为一组", "好的分类需要找到共同特征", "分类让数据更有条理", "AI的核心能力之一就是自动分类"],
    "coverImage": "./assets/covers/AI启蒙绘本_第13课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/13/01.jpg", "./assets/knowledge/13/02.jpg", "./assets/knowledge/13/03.jpg", "./assets/knowledge/13/04.jpg", "./assets/knowledge/13/05.jpg"],
    "picturebookVideos": ["assets/videos/13/AI启蒙绘本_第13课_袜子大整理_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "数据结构",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=14&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index13.html",
    "quiz": [
  {
    "question": "《袜子大整理》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "分类"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习分类对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于分类，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 14,
    "title": "特征放大镜",
    "lessonNum": 14,
    "module": "模块E｜数据排序分类",
    "intro": "第14课「特征放大镜」的AI启蒙故事",
    "keyPoints": ["特征是事物最重要的标志性属性", "提取特征是AI识别物体的关键", "不同的物体有不同的特征组合", "特征越准确，AI识别越精确"],
    "coverImage": "./assets/covers/AI启蒙绘本_第14课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/14/01.jpg", "./assets/knowledge/14/02.jpg", "./assets/knowledge/14/03.jpg", "./assets/knowledge/14/04.jpg"],
    "picturebookVideos": ["assets/videos/14/AI启蒙绘本_第14课_特征放大镜_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "AI是怎样识别人脸的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=5&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index14.html",
    "quiz": [
  {
    "question": "《特征放大镜》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "特征提取"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习特征提取对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于特征提取，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 15,
    "title": "猜一猜明天带伞吗",
    "lessonNum": 15,
    "module": "模块F｜概率与预测",
    "intro": "第15课「猜一猜明天带伞吗」的AI启蒙故事",
    "keyPoints": ["预测是根据已有数据推测未来", "概率帮助我们量化预测的可信度", "数据越多，预测越准确", "AI天气预报就是预测的典型应用"],
    "coverImage": "./assets/covers/AI启蒙绘本_第15课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/15/01.jpg", "./assets/knowledge/15/02.jpg", "./assets/knowledge/15/03.jpg", "./assets/knowledge/15/04.jpg", "./assets/knowledge/15/05.jpg"],
    "picturebookVideos": ["assets/videos/15/AI启蒙绘本_第15课_猜一猜明天带伞吗_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "科学家们怎样训练人工智能",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=4&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index15.html",
    "quiz": [
  {
    "question": "《猜一猜明天带伞吗》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "预测"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习预测对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于预测，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 16,
    "title": "背答案的鹦鹉",
    "lessonNum": 16,
    "module": "模块F｜概率与预测",
    "intro": "第16课「背答案的鹦鹉」的AI启蒙故事",
    "keyPoints": ["机器学习是让机器从数据中自己学习", "训练数据的质量影响学习效果", "学习完成后形成模型", "模型可以对新数据做出预测"],
    "coverImage": "./assets/covers/AI启蒙绘本_第16课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/16/01.jpg", "./assets/knowledge/16/02.jpg", "./assets/knowledge/16/03.jpg", "./assets/knowledge/16/04.jpg"],
    "picturebookVideos": ["assets/videos/16/AI启蒙绘本_第16课_背答案的鹦鹉_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "科学家们怎样训练人工智能",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=4&autoplay=1"
      },
      {
        "title": "AI是怎样打败围棋冠军的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=8&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index16.html",
    "quiz": [
  {
    "question": "《背答案的鹦鹉》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "机器学习基础"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习机器学习基础对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于机器学习基础，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 17,
    "title": "学校里的AI同学",
    "lessonNum": 17,
    "module": "模块G｜机器学习基础",
    "intro": "第17课「学校里的AI同学」的AI启蒙故事",
    "keyPoints": ["AI已经应用在生活的很多领域", "语音助手、推荐系统都是AI应用", "AI是人类的好帮手，不是替代品", "了解AI能帮助我们更好地使用它"],
    "coverImage": "./assets/covers/AI启蒙绘本_第17课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/17/01.jpg", "./assets/knowledge/17/02.jpg", "./assets/knowledge/17/03.jpg", "./assets/knowledge/17/04.jpg"],
    "picturebookVideos": ["assets/videos/17/AI启蒙绘本_第17课_学校里的AI同学_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "到底什么是人工智能",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=1&autoplay=1"
      },
      {
        "title": "机器学习与人工智能",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=34&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index17.html",
    "quiz": [
  {
    "question": "《学校里的AI同学》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "AI应用"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习AI应用对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于AI应用，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 18,
    "title": "小狗学握手",
    "lessonNum": 18,
    "module": "模块G｜机器学习基础",
    "intro": "第18课「小狗学握手」的AI启蒙故事",
    "keyPoints": ["强化学习通过奖励和惩罚来学习", "成功的行为会得到奖励，错误的会受到惩罚", "不断试错和学习是强化学习的特点", "游戏AI常常使用强化学习"],
    "coverImage": "./assets/covers/AI启蒙绘本_第18课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/18/01.jpg", "./assets/knowledge/18/02.jpg", "./assets/knowledge/18/03.jpg", "./assets/knowledge/18/04.jpg"],
    "picturebookVideos": ["assets/videos/18/AI启蒙绘本_第18课_小狗学握手_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "科学家们怎样训练人工智能",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=4&autoplay=1"
      },
      {
        "title": "人脑智能是怎么实现的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=2&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index18.html",
    "quiz": [
  {
    "question": "《小狗学握手》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "强化学习"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习强化学习对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于强化学习，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 19,
    "title": "贴标签的老师",
    "lessonNum": 19,
    "module": "模块G｜机器学习基础",
    "intro": "第19课「贴标签的老师」的AI启蒙故事",
    "keyPoints": ["监督学习需要有标签的训练数据", "标签告诉AI正确答案是什么", "通过大量带标签的数据，AI学会分类", "图像识别常用监督学习"],
    "coverImage": "./assets/covers/AI启蒙绘本_第19课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/19/01.jpg", "./assets/knowledge/19/02.jpg", "./assets/knowledge/19/03.jpg", "./assets/knowledge/19/04.jpg"],
    "picturebookVideos": ["assets/videos/19/AI启蒙绘本_第19课_贴标签的老师_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "AI是怎样识别人脸的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=5&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index19.html",
    "quiz": [
  {
    "question": "《贴标签的老师》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "监督学习"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习监督学习对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于监督学习，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 20,
    "title": "没有标签的玩具箱",
    "lessonNum": 20,
    "module": "模块G｜机器学习基础",
    "intro": "第20课「没有标签的玩具箱」的AI启蒙故事",
    "keyPoints": ["无监督学习不需要标签数据", "AI自己找数据中的规律和分组", "聚类是无监督学习的典型方法", "无监督学习能发现隐藏的规律"],
    "coverImage": "./assets/covers/AI启蒙绘本_第20课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/20/01.jpg", "./assets/knowledge/20/02.jpg", "./assets/knowledge/20/03.jpg", "./assets/knowledge/20/04.jpg"],
    "picturebookVideos": ["assets/videos/20/AI启蒙绘本_第20课_没有标签的玩具箱_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "人工智能是如何变得像人脑的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=3&autoplay=1"
      },
      {
        "title": "数据结构",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=14&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index20.html",
    "quiz": [
  {
    "question": "《没有标签的玩具箱》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "无监督学习"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习无监督学习对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于无监督学习，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 21,
    "title": "点亮聪明灯",
    "lessonNum": 21,
    "module": "模块H｜神经网络",
    "intro": "第21课「点亮聪明灯」的AI启蒙故事",
    "keyPoints": ["神经网络由许多神经元节点组成", "神经元接收输入，产生输出", "连接权重决定信号的强弱", "深度学习基于多层神经网络"],
    "coverImage": "./assets/covers/AI启蒙绘本_第21课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/21/01.jpg", "./assets/knowledge/21/02.jpg", "./assets/knowledge/21/03.jpg", "./assets/knowledge/21/04.jpg"],
    "picturebookVideos": ["assets/videos/21/AI启蒙绘本_第21课_点亮聪明灯_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "人工智能是如何变得像人脑的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=3&autoplay=1"
      },
      {
        "title": "人脑智能是怎么实现的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=2&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index21.html",
    "quiz": [
  {
    "question": "《点亮聪明灯》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "神经元"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习神经元对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于神经元，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 22,
    "title": "从边边角角到整张脸",
    "lessonNum": 22,
    "module": "模块H｜神经网络",
    "intro": "第22课「从边边角角到整张脸」的AI启蒙故事",
    "keyPoints": ["卷积神经网络特别善于处理图像", "通过提取边缘、纹理等特征来识别图像", "从局部特征逐步组合成整体", "人脸识别就是CNN的典型应用"],
    "coverImage": "./assets/covers/AI启蒙绘本_第22课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/22/01.jpg", "./assets/knowledge/22/02.jpg", "./assets/knowledge/22/03.jpg", "./assets/knowledge/22/04.jpg"],
    "picturebookVideos": ["assets/videos/22/AI启蒙绘本_第22课_从边边角角到整张脸_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "AI是怎样识别人脸的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=5&autoplay=1"
      },
      {
        "title": "计算机视觉",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=35&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index22.html",
    "quiz": [
  {
    "question": "《从边边角角到整张脸》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "卷积神经网络"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习卷积神经网络对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于卷积神经网络，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 23,
    "title": "音量旋钮决定谁更重要",
    "lessonNum": 23,
    "module": "模块H｜神经网络",
    "intro": "第23课「音量旋钮决定谁更重要」的AI启蒙故事",
    "keyPoints": ["权重表示各个输入的重要程度", "权重大的输入对结果影响更大", "AI训练就是不断调整权重", "合适的权重让AI更准确"],
    "coverImage": "./assets/covers/AI启蒙绘本_第23课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/23/01.jpg", "./assets/knowledge/23/02.jpg", "./assets/knowledge/23/03.jpg", "./assets/knowledge/23/04.jpg"],
    "picturebookVideos": ["assets/videos/23/AI启蒙绘本_第23课_音量旋钮决定谁更重要_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "人工智能是如何变得像人脑的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=3&autoplay=1"
      },
      {
        "title": "AI是怎样打败围棋冠军的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=8&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index23.html",
    "quiz": [
  {
    "question": "《音量旋钮决定谁更重要》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "权重"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习权重对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于权重，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 24,
    "title": "慢慢调准的小箭头",
    "lessonNum": 24,
    "module": "模块H｜神经网络",
    "intro": "第24课「慢慢调准的小箭头」的AI启蒙故事",
    "keyPoints": ["梯度下降是优化模型的方法", "通过计算错误来调整参数", "慢慢调整，逐渐找到最优解", "这是AI学习的数学核心"],
    "coverImage": "./assets/covers/AI启蒙绘本_第24课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/24/01.jpg", "./assets/knowledge/24/02.jpg", "./assets/knowledge/24/03.jpg", "./assets/knowledge/24/04.jpg", "./assets/knowledge/24/05.jpg"],
    "picturebookVideos": ["assets/videos/24/AI启蒙绘本_第24课_慢慢调准的小箭头_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "科学家们怎样训练人工智能",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=4&autoplay=1"
      },
      {
        "title": "人工智能是如何变得像人脑的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=3&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index24.html",
    "quiz": [
  {
    "question": "《慢慢调准的小箭头》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "梯度下降"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习梯度下降对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于梯度下降，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 25,
    "title": "会接话的鹦鹉2.0",
    "lessonNum": 25,
    "module": "模块I｜NLP与语言模型",
    "intro": "第25课「会接话的鹦鹉2.0」的AI启蒙故事",
    "keyPoints": ["语言模型学会预测下一个词", "训练时学习大量文本规律", "能生成通顺连贯的句子", "ChatGPT就是语言模型的应用"],
    "coverImage": "./assets/covers/AI启蒙绘本_第25课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/25/01.jpg", "./assets/knowledge/25/02.jpg", "./assets/knowledge/25/03.jpg", "./assets/knowledge/25/04.jpg"],
    "picturebookVideos": ["assets/videos/25/AI启蒙绘本_第25课_会接话的鹦鹉2.0_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "AI如何理解自然语言",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=7&autoplay=1"
      },
      {
        "title": "自然语言处理",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=36&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index25.html",
    "quiz": [
  {
    "question": "《会接话的鹦鹉2.0》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "语言模型"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习语言模型对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于语言模型，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 26,
    "title": "给AI的清楚指令",
    "lessonNum": 26,
    "module": "模块I｜NLP与语言模型",
    "intro": "第26课「给AI的清楚指令」的AI启蒙故事",
    "keyPoints": ["给AI的指令要清晰具体", "好的提示词能得到更好的结果", "描述要准确，避免歧义", "学会写提示词是使用AI的重要技能"],
    "coverImage": "./assets/covers/AI启蒙绘本_第26课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/26/01.jpg", "./assets/knowledge/26/02.jpg", "./assets/knowledge/26/03.jpg", "./assets/knowledge/26/04.jpg"],
    "picturebookVideos": ["assets/videos/26/AI启蒙绘本_第26课_给AI的清楚指令_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "AI如何理解自然语言",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=7&autoplay=1"
      },
      {
        "title": "指令和程序",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=8&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index26.html",
    "quiz": [
  {
    "question": "《给AI的清楚指令》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "提示词"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习提示词对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于提示词，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 27,
    "title": "从乱点点到清图画",
    "lessonNum": 27,
    "module": "模块I｜NLP与语言模型",
    "intro": "第27课「从乱点点到清图画」的AI启蒙故事",
    "keyPoints": ["生成模型能创造新的内容", "从随机数据中生成清晰图像", "AI能学会图像的风格和规律", "图像生成AI改变了艺术创作"],
    "coverImage": "./assets/covers/AI启蒙绘本_第27课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/27/01.jpg", "./assets/knowledge/27/02.jpg", "./assets/knowledge/27/03.jpg", "./assets/knowledge/27/04.jpg"],
    "picturebookVideos": ["assets/videos/27/AI启蒙绘本_第27课_从乱点点到清图画_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "AI是怎样识别人脸的",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=5&autoplay=1"
      },
      {
        "title": "计算机视觉",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=35&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index27.html",
    "quiz": [
  {
    "question": "《从乱点点到清图画》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "生成模型"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习生成模型对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于生成模型，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 28,
    "title": "会编故事的机器人",
    "lessonNum": 28,
    "module": "模块J｜生成式AI",
    "intro": "第28课「会编故事的机器人」的AI启蒙故事",
    "keyPoints": ["AI能通过学习生成创意故事", "语言AI理解上下文和逻辑", "AI创作是人类创意的延伸", "人机协作能产生更好的创意作品"],
    "coverImage": "./assets/covers/AI启蒙绘本_第28课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/28/01.jpg", "./assets/knowledge/28/02.jpg", "./assets/knowledge/28/03.jpg", "./assets/knowledge/28/04.jpg"],
    "picturebookVideos": ["assets/videos/28/AI启蒙绘本_第28课_会编故事的机器人_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "AI如何理解自然语言",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=7&autoplay=1"
      },
      {
        "title": "自然语言处理",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=36&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index28.html",
    "quiz": [
  {
    "question": "《会编故事的机器人》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "AI创作"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习AI创作对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于AI创作，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 29,
    "title": "不要随便给陌生人",
    "lessonNum": 29,
    "module": "模块K｜AI伦理与安全",
    "intro": "第29课「不要随便给陌生人」的AI启蒙故事",
    "keyPoints": ["保护个人信息是AI时代的重要素养", "不随便分享个人信息", "AI系统需要遵守隐私保护规定", "学会辨别信息真假很重要"],
    "coverImage": "./assets/covers/AI启蒙绘本_第29课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/29/01.jpg", "./assets/knowledge/29/02.jpg", "./assets/knowledge/29/03.jpg", "./assets/knowledge/29/04.jpg", "./assets/knowledge/29/05.jpg"],
    "picturebookVideos": ["assets/videos/29/AI启蒙绘本_第29课_不要随便给陌生人_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "网络安全",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=31&autoplay=1"
      },
      {
        "title": "黑客与攻击",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=32&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index29.html",
    "quiz": [
  {
    "question": "《不要随便给陌生人》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "AI安全"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习AI安全对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于AI安全，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 30,
    "title": "同样努力却分数不同",
    "lessonNum": 30,
    "module": "模块K｜AI伦理与安全",
    "intro": "第30课「同样努力却分数不同」的AI启蒙故事",
    "keyPoints": ["AI系统可能存在数据偏见", "训练数据不公平会导致不公平的结果", "追求AI公平是重要的社会议题", "我们要关注AI带来的伦理问题"],
    "coverImage": "./assets/covers/AI启蒙绘本_第30课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/30/01.jpg", "./assets/knowledge/30/02.jpg", "./assets/knowledge/30/03.jpg", "./assets/knowledge/30/04.jpg"],
    "picturebookVideos": ["assets/videos/30/AI启蒙绘本_第30课_同样努力却分数不同_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "AI能拥有人类情感吗",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=9&autoplay=1"
      },
      {
        "title": "到底什么是人工智能",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=1&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index30.html",
    "quiz": [
  {
    "question": "《同样努力却分数不同》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "AI公平"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习AI公平对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于AI公平，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 31,
    "title": "超级搭档",
    "lessonNum": 31,
    "module": "模块L｜AI工具与未来",
    "intro": "第31课「超级搭档」的AI启蒙故事",
    "keyPoints": ["AI是人类的超级搭档", "人类和AI各有优势", "协作能完成单独完成不了的任务", "未来是人机协作的时代"],
    "coverImage": "./assets/covers/AI启蒙绘本_第31课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/31/01.jpg", "./assets/knowledge/31/02.jpg", "./assets/knowledge/31/03.jpg", "./assets/knowledge/31/04.jpg", "./assets/knowledge/31/05.jpg", "./assets/knowledge/31/06.jpg", "./assets/knowledge/31/07.jpg", "./assets/knowledge/31/08.jpg", "./assets/knowledge/31/09.jpg", "./assets/knowledge/31/10.jpg"],
    "picturebookVideos": ["assets/videos/31/AI启蒙绘本_第31课_超级搭档_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "人工智能未来会走向何方",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=10&autoplay=1"
      },
      {
        "title": "教育型科技",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=39&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index31.html",
    "quiz": [
  {
    "question": "《超级搭档》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "人机协作"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习人机协作对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于人机协作，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  },
  {
    "id": 32,
    "title": "小小AI研究员毕业啦",
    "lessonNum": 32,
    "module": "模块L｜AI工具与未来",
    "intro": "第32课「小小AI研究员毕业啦」的AI启蒙故事",
    "keyPoints": ["AI技术不断在进步和发展", "学习AI是面向未来的重要准备", "每个人都可以成为AI研究员", "用AI为世界创造更多美好"],
    "coverImage": "./assets/covers/AI启蒙绘本_第32课_封面海报_3x4.jpeg",
    "knowledgeImages": ["./assets/knowledge/32/01.jpg", "./assets/knowledge/32/02.jpg", "./assets/knowledge/32/03.jpg", "./assets/knowledge/32/04.jpg", "./assets/knowledge/32/05.jpg"],
    "picturebookVideos": ["assets/videos/32/AI启蒙绘本_第32课_小小AI研究员毕业啦_横版视频.mp4"],
    "scienceVideos": [
      {
        "title": "人工智能未来会走向何方",
        "url": "https://player.bilibili.com/player.html?bvid=BV1134y1d72L&page=10&autoplay=1"
      },
      {
        "title": "奇点天网计算机的未来",
        "url": "https://player.bilibili.com/player.html?bvid=BV1EW411u7th&page=40&autoplay=1"
      }
    ],
    "gamePath": "assets/games/index32.html",
    "quiz": [
  {
    "question": "《小小AI研究员毕业啦》这节课的核心概念是什么？",
    "options": [
      {
        "key": "A",
        "text": "信息处理"
      },
      {
        "key": "B",
        "text": "AI未来"
      },
      {
        "key": "C",
        "text": "电脑硬件"
      },
      {
        "key": "D",
        "text": "网络连接"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI学习时最重要的第一步是什么？",
    "options": [
      {
        "key": "A",
        "text": "随意猜测"
      },
      {
        "key": "B",
        "text": "闭眼睛想"
      },
      {
        "key": "C",
        "text": "收集信息"
      },
      {
        "key": "D",
        "text": "直接输出答案"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "团团和点点是谁？",
    "options": [
      {
        "key": "A",
        "text": "真实的小朋友"
      },
      {
        "key": "B",
        "text": "课程中的卡通角色"
      },
      {
        "key": "C",
        "text": "老师的名字"
      },
      {
        "key": "D",
        "text": "机器人的型号"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学习AI未来对AI有什么帮助？",
    "options": [
      {
        "key": "A",
        "text": "让AI变得更重"
      },
      {
        "key": "B",
        "text": "帮助AI更好地理解和处理信息"
      },
      {
        "key": "C",
        "text": "让AI不需要电"
      },
      {
        "key": "D",
        "text": "让AI变成人类"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "信息越多，AI的判断会怎样？",
    "options": [
      {
        "key": "A",
        "text": "越不准确"
      },
      {
        "key": "B",
        "text": "没有变化"
      },
      {
        "key": "C",
        "text": "越准确"
      },
      {
        "key": "D",
        "text": "变得更慢"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "下面哪个是AI能做到的事情？",
    "options": [
      {
        "key": "A",
        "text": "感受到疼痛"
      },
      {
        "key": "B",
        "text": "识别图片中的物体"
      },
      {
        "key": "C",
        "text": "感受到快乐"
      },
      {
        "key": "D",
        "text": "自己吃饭"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "学AI知识对我们有什么用？",
    "options": [
      {
        "key": "A",
        "text": "没有任何用"
      },
      {
        "key": "B",
        "text": "只有上课才用得到"
      },
      {
        "key": "C",
        "text": "帮助我们理解智能科技、更好地生活"
      },
      {
        "key": "D",
        "text": "让我们变成机器人"
      }
    ],
    "answer": "C",
    "explanation": ""
  },
  {
    "question": "关于AI未来，下面哪个说法是正确的？",
    "options": [
      {
        "key": "A",
        "text": "只有大人才需要了解"
      },
      {
        "key": "B",
        "text": "这是AI工作的重要原理之一"
      },
      {
        "key": "C",
        "text": "这和AI没有关系"
      },
      {
        "key": "D",
        "text": "只有科学家才懂"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "团团学习AI知识后，最大的收获是什么？",
    "options": [
      {
        "key": "A",
        "text": "变成了机器人"
      },
      {
        "key": "B",
        "text": "建立了科学思维，能更好地分析问题"
      },
      {
        "key": "C",
        "text": "不需要上学了"
      },
      {
        "key": "D",
        "text": "获得了超能力"
      }
    ],
    "answer": "B",
    "explanation": ""
  },
  {
    "question": "AI启蒙课程一共有几节课？",
    "options": [
      {
        "key": "A",
        "text": "10节"
      },
      {
        "key": "B",
        "text": "20节"
      },
      {
        "key": "C",
        "text": "32节"
      },
      {
        "key": "D",
        "text": "50节"
      }
    ],
    "answer": "C",
    "explanation": ""
  }
]
  }
];export default courses;
