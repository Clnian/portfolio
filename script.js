const projectData = {
  express: {
    title: '智能快递分类系统',
    type: '全国大学生电子设计大赛',
    image: 'assets/express_sorting.jpg',
    images: [
      { src: 'assets/express_sorting.jpg', alt: '智能快递分类系统技术概览', caption: '竞赛项目技术概览' }
    ],
    facts: [
      { label: '项目角色', value: '测试与联调' },
      { label: '项目形态', value: '团队竞赛装置' },
      { label: '交付范围', value: '硬件到云端' }
    ],
    tags: ['STM32', 'RFID', 'ESP8266', 'OneNET', 'OLED', '称重模块'],
    description: `
      <p>基于 STM32F103 的智能快递分拣装置，参赛项目。系统通过 RFID 识别快递标签信息，通过称重模块获取重量，OLED 实时显示分拣状态，并通过 ESP8266 将数据上传至 OneNET 云平台。</p>
      <p>我在团队中主要负责各模块功能测试、异常场景验证和端到端联调：包括 RFID 读写稳定性测试、称重校准、通信协议调试，以及云平台数据同步验证。</p>
    `,
    highlights: [
      'RFID 识别 + 称重 + 自动分类三位一体',
      'ESP8266 连接 OneNET 实现云端数据同步',
      'OLED 本地状态显示与异常提示',
      '完成从硬件调试到整机联调的完整流程'
    ]
  },
  curtain: {
    title: '基于物联网的智能窗帘光照与温度联合控制系统',
    type: '毕业设计',
    image: 'assets/curtain-hardware.jpg',
    images: [
      { src: 'assets/curtain-hardware.jpg', alt: '智能窗帘控制系统实物控制板', caption: 'STM32、ESP8266 与 OLED 实物控制板' },
      { src: 'assets/curtain-miniprogram.jpg', alt: '智能窗帘微信小程序首页', caption: '微信小程序实时监控与模式切换' },
      { src: 'assets/curtain-cloud.png', alt: 'OneNET 云平台设备数据', caption: 'OneNET 云平台属性与实时数据' },
      { src: 'assets/curtain-architecture.png', alt: '智能窗帘系统架构图', caption: '传感、控制、执行与云端通信架构' }
    ],
    facts: [
      { label: '项目角色', value: '独立设计开发' },
      { label: '项目形态', value: '毕业设计实物' },
      { label: '交付范围', value: '硬件 / 云 / 小程序' }
    ],
    tags: ['STM32', 'ESP8266', 'MQTT', '微信小程序', 'OneNET', 'DHT11', '光敏电阻'],
    description: `
      <p>毕业设计项目，以 STM32F103 为主控芯片，通过 DHT11 温湿度传感器和光敏电阻采集环境数据，结合温度和光照阈值自动控制窗帘开合。</p>
      <p>通过 ESP8266 连接 OneNET MQTT 服务，配合微信小程序实现远程数据查看、手动/自动模式切换、阈值设置和历史记录查询。</p>
    `,
    highlights: [
      '光照 + 温度联合控制算法，区分夏季防晒、冬季采暖、夜间隐私模式',
      'STM32 + ESP8266 双控制器架构，串口通信协议设计',
      '微信小程序远程监控与参数配置',
      'OneNET 云平台数据上云与可视化'
    ],
    links: [
      { label: '查看 GitHub 源码', url: 'https://github.com/Clnian/smart-curtain' }
    ]
  },
  mapmemory: {
    title: '地图记忆',
    type: 'Android 应用',
    image: 'assets/map_photoo_logo.png',
    images: [
      { src: 'assets/map_photoo_logo.png', alt: '地图记忆应用图标', caption: '地图记忆应用视觉标识' }
    ],
    facts: [
      { label: '项目角色', value: '独立开发' },
      { label: '项目形态', value: 'Android 原型' },
      { label: '数据策略', value: '本地优先' }
    ],
    tags: ['Kotlin', 'Jetpack Compose', 'Room', '腾讯地图 SDK', 'ML Kit', 'CameraX'],
    description: `
      <p>基于 Kotlin 和 Jetpack Compose 的照片管理应用扩展版。在原有照片整理功能基础上，新增腾讯地图集成、关系组、纪念日、回忆册和城市足迹等功能。</p>
      <p>数据持久化从 SharedPreferences 迁移到 Room 数据库，并接入 ML Kit 实现部分图像识别能力。我负责整体架构、UI 实现和数据库迁移。</p>
    `,
    highlights: [
      'Jetpack Compose 全新 UI 架构',
      'Room 数据库替代 SharedPreferences，支持复杂查询',
      '腾讯地图 SDK 实现照片 GPS 标记与城市足迹',
      'ML Kit 图像识别能力接入'
    ]
  },
  novel: {
    title: 'novel-server 阅读后端',
    type: 'Python 后端服务',
    image: 'assets/novel_server.jpg',
    images: [
      { src: 'assets/novel_server.jpg', alt: 'novel-server 阅读后端技术概览', caption: '阅读服务技术概览' }
    ],
    facts: [
      { label: '项目角色', value: '独立开发' },
      { label: '项目形态', value: '后端服务' },
      { label: '交付方式', value: 'Docker 部署' }
    ],
    tags: ['Python', 'FastAPI', 'SQLite', 'Docker', 'RESTful API', 'EPUB'],
    description: `
      <p>基于 FastAPI 的小说/漫画阅读后端服务，支持 EPUB、TXT、ZIP/CBZ、RAR/CBR 多格式书籍自动扫描入库。</p>
      <p>提供 REST API、Web 管理后台、动态 Legado 书源生成，以及 TXT 章节检测与 EPUB 解析。我负责后端架构、API 设计、Docker 部署和文档编写。</p>
    `,
    highlights: [
      '多格式书籍自动扫描入库（EPUB/TXT/CBZ/CBR）',
      'FastAPI 高性能 REST API 设计',
      '动态 Legado 书源生成',
      'Docker 容器化部署与 SQLite 持久化'
    ]
  },
  omnimedia: {
    title: 'OmniMedia Ops 自媒体运营',
    type: 'Python 全栈 · 多平台运营编排',
    image: 'assets/omnimedia-dashboard.png',
    images: [
      { src: 'assets/omnimedia-dashboard.png', alt: 'OmniMedia Ops 运营总览', caption: '运营总览：热点、待审核、发布与复盘状态' },
      { src: 'assets/omnimedia-editor.png', alt: 'OmniMedia Ops 平台内容编辑器', caption: '平台内容编辑、事实版权核验与小红书预览' },
      { src: 'assets/omnimedia-generation.png', alt: 'OmniMedia Ops 内容生成流程', caption: '模型选择、目标平台与生成任务状态' }
    ],
    facts: [
      { label: '项目角色', value: '独立设计开发' },
      { label: '当前版本', value: 'v0.10' },
      { label: '工程形态', value: '模块化单体 + Worker' }
    ],
    tags: ['Python', 'FastAPI', 'Pydantic', 'Playwright / CDP', 'SQLite WAL', 'Docker Compose', 'FFmpeg', 'DashScope'],
    description: `
      <p>面向小红书、今日头条、抖音、微信公众号、微博和知乎的多平台运营编排系统 v0.10。项目采用模块化单体承载业务事务，把浏览器自动化隔离为独立 Worker。</p>
      <p>已实现微博、知乎、抖音和百度热点响应解析，OpenAI-compatible 文本与图片服务，品牌知识库、去重、事实来源与素材许可治理，人工审核、内容日历、A/B 归因和自动周报。</p>
      <p>发布侧使用事务 Outbox、租约抢占、指数退避、结果未知对账和死信；小红书真实图文预览、专用 Worker 登录、账号校验与禁发门禁已经验证。</p>
      <p>视频制作功能：分镜编排→首帧渲染→DashScope AI 视频生成→FFmpeg 合成，支持 EXPRESS/STANDARD/DRAMA 三种制作模式。</p>
    `,
    highlights: [
      '微博、知乎、抖音、百度热点解析，支持单源失败隔离和凭据引用',
      'OpenAI-compatible 文本/图片生成与 Ian 小黑插画提示词管线',
      '品牌、相似度、事实来源和素材版权治理，保留人工审核门禁',
      '事务 Outbox、租约恢复、指数退避、结果对账、死信和 HMAC 防重放回调',
      '小红书/头条隔离 Worker、有窗口预览、账号熔断与真实发布二次开关',
      'DashScope 视频脚本→分镜→首帧→AI 生成→FFmpeg 合成流水线（EXPRESS/STANDARD/DRAMA）'
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // AOS init
  AOS.init({
    duration: 600,
    once: true,
    offset: 80,
    easing: 'ease-out-cubic',
  });

  // Mobile menu
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  document.querySelectorAll('.project-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.addEventListener('keydown', event => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      openProjectModal(card.dataset.project);
    });
  });

  // Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });

  // Progress bar
  const progressBar = document.getElementById('progress-bar');
  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    progressBar.style.width = progress + '%';
  }, { passive: true });

  // Mouse spotlight
  const spotlight = document.getElementById('mouse-spotlight');
  if (spotlight && !window.matchMedia('(pointer: coarse)').matches) {
    spotlight.classList.remove('opacity-0');
    spotlight.classList.add('opacity-100');
    document.addEventListener('mousemove', (e) => {
      spotlight.style.setProperty('--mouse-x', e.clientX + 'px');
      spotlight.style.setProperty('--mouse-y', e.clientY + 'px');
    }, { passive: true });
  }

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  const animateCounter = (counter) => {
    const target = parseInt(counter.getAttribute('data-target'));
    const suffix = counter.getAttribute('data-suffix') || '';
    const duration = 2000;
    const start = 0;
    const startTime = performance.now();

    const update = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(start + (target - start) * easeOut);
      counter.textContent = current + suffix;
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    };
    requestAnimationFrame(update);
  };

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // Hero title relies on parent AOS fade-up; no per-character split to avoid CJK rendering artifacts.

  // Toast helper
  window.showToast = (message) => {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');
    toastMessage.textContent = message;
    toast.classList.remove('translate-y-24', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
      toast.classList.add('translate-y-24', 'opacity-0');
      toast.classList.remove('translate-y-0', 'opacity-100');
    }, 2500);
  };

  // Particle canvas
  const canvas = document.getElementById('particle-canvas');
  if (canvas && !window.matchMedia('(pointer: coarse)').matches) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    const particleCount = 35;
    const connectionDistance = 120;
    const maxConnections = 3;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1.5 + 0.5;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        let connections = 0;
        for (let j = i + 1; j < particles.length; j++) {
          if (connections >= maxConnections) break;
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            const opacity = (1 - distance / connectionDistance) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
            connections++;
          }
        }
      });

      requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();
    window.addEventListener('resize', resize, { passive: true });
  }
});

// Project modal functions
let previouslyFocusedElement = null;

function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const modalImage = document.getElementById('modal-image');
  const modalImageCaption = document.getElementById('modal-image-caption');
  const modalThumbnails = document.getElementById('modal-thumbnails');
  const modalTitle = document.getElementById('modal-title');
  const modalType = document.getElementById('modal-type');
  const modalFacts = document.getElementById('modal-facts');
  const modalTags = document.getElementById('modal-tags');
  const modalDescription = document.getElementById('modal-description');
  const modalHighlightsList = document.getElementById('modal-highlights-list');
  const modalLinks = document.getElementById('modal-links');
  const modalCloseButton = document.getElementById('modal-close-button');
  const images = data.images?.length
    ? data.images
    : [{ src: data.image, alt: data.title, caption: data.title }];

  modalTitle.textContent = data.title;
  modalType.textContent = data.type;
  modalDescription.innerHTML = data.description;

  const selectImage = index => {
    const selectedImage = images[index];
    modalImage.src = selectedImage.src;
    modalImage.alt = selectedImage.alt || data.title;
    modalImageCaption.textContent = selectedImage.caption || data.title;
    modalThumbnails.querySelectorAll('.modal-thumbnail').forEach((thumbnail, thumbnailIndex) => {
      const isActive = thumbnailIndex === index;
      thumbnail.classList.toggle('is-active', isActive);
      thumbnail.setAttribute('aria-selected', String(isActive));
    });
  };

  modalThumbnails.replaceChildren();
  if (images.length > 1) {
    modalThumbnails.classList.remove('hidden');
    modalThumbnails.classList.add('flex');
    images.forEach((image, index) => {
      const thumbnail = document.createElement('button');
      thumbnail.type = 'button';
      thumbnail.className = 'modal-thumbnail';
      thumbnail.setAttribute('aria-label', `查看图片 ${index + 1}：${image.caption || data.title}`);
      thumbnail.setAttribute('role', 'tab');

      const thumbnailImage = document.createElement('img');
      thumbnailImage.src = image.src;
      thumbnailImage.alt = '';
      thumbnailImage.loading = 'lazy';
      thumbnail.appendChild(thumbnailImage);
      thumbnail.addEventListener('click', () => selectImage(index));
      modalThumbnails.appendChild(thumbnail);
    });
  } else {
    modalThumbnails.classList.add('hidden');
    modalThumbnails.classList.remove('flex');
  }
  selectImage(0);

  modalFacts.replaceChildren();
  (data.facts || []).forEach(fact => {
    const factItem = document.createElement('div');
    factItem.className = 'modal-fact';
    const factLabel = document.createElement('span');
    factLabel.textContent = fact.label;
    const factValue = document.createElement('strong');
    factValue.textContent = fact.value;
    factItem.append(factLabel, factValue);
    modalFacts.appendChild(factItem);
  });

  modalTags.replaceChildren();
  data.tags.forEach(tag => {
    const tagElement = document.createElement('span');
    tagElement.className = 'project-tag';
    tagElement.textContent = tag;
    modalTags.appendChild(tagElement);
  });

  modalHighlightsList.replaceChildren();
  data.highlights.forEach(item => {
    const listItem = document.createElement('li');
    listItem.className = 'flex items-start gap-3 text-neutral-400';
    const marker = document.createElement('span');
    marker.className = 'w-1.5 h-1.5 rounded-full bg-white/50 mt-2 shrink-0';
    const content = document.createElement('span');
    content.textContent = item;
    listItem.append(marker, content);
    modalHighlightsList.appendChild(listItem);
  });

  modalLinks.replaceChildren();
  if (data.links?.length) {
    modalLinks.classList.remove('hidden');
    const linkLabel = document.createElement('div');
    linkLabel.className = 'text-xs text-neutral-500 tracking-widest uppercase mb-3';
    linkLabel.textContent = '项目链接';
    modalLinks.appendChild(linkLabel);
    data.links.forEach(link => {
      const anchor = document.createElement('a');
      anchor.className = 'modal-link';
      anchor.href = link.url;
      anchor.target = '_blank';
      anchor.rel = 'noopener noreferrer';
      anchor.textContent = link.label;
      const arrow = document.createElement('span');
      arrow.setAttribute('aria-hidden', 'true');
      arrow.textContent = '↗';
      anchor.appendChild(arrow);
      modalLinks.appendChild(anchor);
    });
  } else {
    modalLinks.classList.add('hidden');
  }

  previouslyFocusedElement = document.activeElement;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const content = modal.querySelector('.modal-content');
  content.scrollTop = 0;
  content.style.transform = 'scale(0.95)';
  content.style.opacity = '0';
  requestAnimationFrame(() => {
    content.style.transform = 'scale(1)';
    content.style.opacity = '1';
    modalCloseButton.focus();
  });
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  if (modal.classList.contains('hidden')) return;
  const content = modal.querySelector('.modal-content');
  content.style.transform = 'scale(0.95)';
  content.style.opacity = '0';
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
    if (previouslyFocusedElement instanceof HTMLElement) {
      previouslyFocusedElement.focus();
    }
  }, 300);
}

// Close modal on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const modal = document.getElementById('project-modal');
    if (!modal.classList.contains('hidden')) {
      closeProjectModal();
    }
  }
});
