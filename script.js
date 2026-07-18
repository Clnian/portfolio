const projectData = {
  express: {
    title: '智能快递分类系统',
    type: '全国大学生电子设计大赛',
    image: 'assets/express_sorting.jpg',
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
    image: 'assets/graduation_project.jpg',
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
    ]
  },
  mapmemory: {
    title: '地图记忆',
    type: 'Android 应用',
    image: 'assets/map_photoo_logo.png',
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
  mapalbum: {
    title: 'map_album 地图相册',
    type: 'Flutter 跨平台应用',
    image: 'assets/map_album.jpg',
    tags: ['Flutter', 'Dart', 'BLoC', 'Drift', 'OpenStreetMap', 'Clean Architecture'],
    description: `
      <p>Flutter 跨平台相册应用，支持在 OpenStreetMap 上查看照片 GPS 标记、按地点和时间浏览、创建行程并回放路线。</p>
      <p>采用 Clean Architecture 五层架构，本地使用 Drift 数据库，状态管理使用 BLoC。我独立完成整个项目的需求分析、架构设计、编码和测试。</p>
    `,
    highlights: [
      'Clean Architecture 五层架构设计',
      'OpenStreetMap 地图集成与 GPS 轨迹回放',
      'Drift 本地数据库与复杂相册查询',
      'BLoC 状态管理，跨平台一致体验'
    ]
  },
  novel: {
    title: 'novel-server 阅读后端',
    type: 'Python 后端服务',
    image: 'assets/novel_server.jpg',
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

  // Hero name character animation
  const heroName = document.getElementById('hero-name');
  if (heroName) {
    const text = heroName.textContent.trim();
    heroName.innerHTML = '';
    text.split('').forEach((char, index) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.display = 'inline-block';
      span.style.opacity = '0';
      span.style.transform = 'translateY(30px)';
      span.style.animation = `fade-in-up 0.8s ease-out ${index * 0.1}s forwards`;
      heroName.appendChild(span);
    });
  }

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
function openProjectModal(projectId) {
  const data = projectData[projectId];
  if (!data) return;

  const modal = document.getElementById('project-modal');
  const modalImage = document.getElementById('modal-image');
  const modalTitle = document.getElementById('modal-title');
  const modalType = document.getElementById('modal-type');
  const modalTags = document.getElementById('modal-tags');
  const modalDescription = document.getElementById('modal-description');
  const modalHighlightsList = document.getElementById('modal-highlights-list');

  modalImage.src = data.image;
  modalImage.alt = data.title;
  modalTitle.textContent = data.title;
  modalType.textContent = data.type;
  modalDescription.innerHTML = data.description;

  modalTags.innerHTML = data.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');
  modalHighlightsList.innerHTML = data.highlights.map(item => `
    <li class="flex items-start gap-3 text-neutral-400">
      <span class="w-1.5 h-1.5 rounded-full bg-white/50 mt-2 shrink-0"></span>
      <span>${item}</span>
    </li>
  `).join('');

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  // Animate content
  const content = modal.querySelector('.modal-content');
  content.style.transform = 'scale(0.95)';
  content.style.opacity = '0';
  requestAnimationFrame(() => {
    content.style.transform = 'scale(1)';
    content.style.opacity = '1';
  });
}

function closeProjectModal() {
  const modal = document.getElementById('project-modal');
  const content = modal.querySelector('.modal-content');
  content.style.transform = 'scale(0.95)';
  content.style.opacity = '0';
  setTimeout(() => {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
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
