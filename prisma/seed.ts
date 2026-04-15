import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const db = new PrismaClient();

async function main() {
  console.log('🌱 Seeding FYF database...');

  // Clear existing
  await db.orderItem.deleteMany();
  await db.order.deleteMany();
  await db.product.deleteMany();
  await db.character.deleteMany();
  await db.crew.deleteMany();

  // Characters
  await db.character.createMany({
    data: [
      {
        slug: 'cattivo',
        name: 'CATTIVO',
        korName: '카티보',
        role: 'PACE MAKER',
        icon: '⚡',
        color: '#5B2A86',
        age: 24,
        height: '182cm',
        origin: '순천 낙안면',
        quote: '페이스? 그거 누가 정한 건데.',
        originStory:
          '무기력하게 방황하던 24세의 그는, 비 오는 어느 밤 골목에서 번개를 맞았다. 심장에 전기 에너지가 남았고, 방출하지 않으면 가슴이 터질 것 같았다. 그가 처음 달리기 시작한 순간, 발끝에서 보라색 스파크가 튀었다.',
        unlocked: true,
      },
      {
        slug: 'len',
        name: 'LEN',
        korName: '렌',
        role: 'NAVIGATOR',
        icon: '📷',
        color: '#6FB6FF',
        age: 19,
        height: '170cm',
        origin: '렌즈팩토리',
        quote: '좌측 2시 방향, 8초 후 차량.',
        originStory: '폐쇄된 카메라 공장에서 홀로 자란 천재. 고글을 통해 지형의 흐름과 공기의 길을 홀로그램처럼 시각화하여 최적의 경로를 설계한다.',
        unlocked: true,
      },
      {
        slug: 'roco',
        name: 'ROCO',
        korName: '로코',
        role: 'HEAVY ENDURANCE',
        icon: '🎧',
        color: '#7A0F0F',
        age: 31,
        height: '195cm',
        origin: '브릿지라인',
        quote: '...',
        originStory: '머릿속을 괴롭히는 수많은 잡념과 환청을 육체적인 한계를 통해 음소거 시키는 침묵의 질주자. 헤드폰에서는 174BPM 드럼앤베이스만이 흐른다.',
        unlocked: true,
      },
      {
        slug: 'dr-block',
        name: 'DR. BLOCK',
        korName: '닥터 블록',
        role: 'STRATEGIST',
        icon: '📊',
        color: '#FFFFFF',
        age: 29,
        height: '178cm',
        origin: '그리드센트럴 (전직)',
        quote: 'Anomaly detected.',
        originStory: '모든 것을 데이터로만 판단하던 완벽주의자. 카티보의 불규칙한 에너지 파동을 목격하고 그 가치를 증명하기 위해 메트로놈 협회를 박차고 나와 크루에 합류했다.',
        unlocked: true,
      },
      {
        slug: 'echo',
        name: 'ECHO',
        korName: '에코',
        role: 'SOUND TRACKER',
        icon: '🎵',
        color: '#3EE8B0',
        age: 22,
        height: '168cm',
        origin: '에코덤',
        quote: '...그 소리, 9초 뒤에 온다.',
        originStory: '시즌 2에서 합류. 청각 과민증을 Sonic Flow 능력으로 역변환. 아버지의 에코덱을 물려받았다.',
        unlocked: false,
      },
    ],
  });

  // Products — 12 SKUs
  const products = [
    {
      slug: 'cattivo-spark-jacket',
      name: 'CATTIVO SPARK JACKET',
      line: 'FLOW',
      character: 'cattivo',
      price: 290000,
      description: '야간 발광 리플렉티브 자켓. 카티보 번개 자수.',
      story: '번개를 맞은 카티보의 이마에서 영감받았다. 어둠 속에서 스스로 빛난다.',
      material: '재활용 리플렉티브 85% / 스판 15%',
      weight: '380g (M 기준)',
      badge: 'ANOMALY',
      sizes: 'XS,S,M,L,XL',
      colors: 'BLACK,PURPLE,RED',
      image: '⚡',
      featured: true,
    },
    {
      slug: 'lightning-scar-jogger',
      name: 'LIGHTNING SCAR JOGGER',
      line: 'ANOMALY',
      character: 'cattivo',
      price: 179000,
      description: '찢어진 듯한 번개 패턴 조거',
      story: '카티보의 찢어진 바지를 재현. 세 구멍은 번개 맞은 자국.',
      material: '코튼 80% / 폴리 20%',
      weight: '290g',
      badge: 'ANOMALY',
      sizes: 'S,M,L,XL',
      colors: 'BLACK',
      image: '⚡',
      featured: true,
    },
    {
      slug: 'asym-sneakers',
      name: 'FYF ASYM SNEAKERS',
      line: 'FLOW',
      character: 'cattivo',
      price: 290000,
      description: '짝짝이 컬러 스니커즈. 왼쪽 레드, 오른쪽 네온그린.',
      story: '카티보의 시그니처 짝짝이 운동화. 규격화된 대칭에 대한 저항.',
      material: '메시 + TPU',
      weight: '240g (한 짝)',
      badge: 'LIMITED',
      sizes: '250,255,260,265,270,275,280',
      colors: 'ASYMMETRIC',
      image: '👟',
      featured: true,
    },
    {
      slug: 'len-vision-cap',
      name: 'LEN VISION CAP',
      line: 'GOODS',
      character: 'len',
      price: 59000,
      description: '렌의 카메라 렌즈 모티브 캡',
      story: '챙에 렌즈 장식. 시야를 스캔하는 자의 상징.',
      material: '코튼 100%',
      weight: '110g',
      badge: null,
      sizes: 'FREE',
      colors: 'BLACK,GREY',
      image: '📷',
      featured: true,
    },
    {
      slug: 'roco-silence-hoodie',
      name: 'ROCO SILENCE HOODIE',
      line: 'FLOW',
      character: 'roco',
      price: 129000,
      description: '후드 안쪽 헤드폰 포켓 내장. 174 자수.',
      story: '과묵한 로코의 헤드폰 + BPM. 로고는 최소화.',
      material: '코튼 70% / 폴리 30%',
      weight: '520g',
      badge: null,
      stockLow: true,
      sizes: 'S,M,L,XL',
      colors: 'DEEP-RED,BLACK',
      image: '🎧',
      featured: true,
    },
    {
      slug: 'dr-block-data-tee',
      name: 'DR. BLOCK DATA TEE',
      line: 'CORE',
      character: 'dr-block',
      price: 49000,
      description: '데이터 그래프 프린트 티셔츠',
      story: '소매의 가짜 그래프, 뒷면 "ANOMALY DETECTED" 슬로건.',
      material: '코튼 100%',
      weight: '180g',
      badge: 'NEW',
      sizes: 'XS,S,M,L,XL',
      colors: 'WHITE,BLACK',
      image: '📊',
      featured: false,
    },
    {
      slug: 'bunker-zero-socks',
      name: 'BUNKER ZERO SOCKS 3PACK',
      line: 'CORE',
      character: null,
      price: 49000,
      description: '크루 캐릭터 심볼 자수 양말 3족',
      story: '벙커 0번의 시그니처. 발목마다 다른 심볼.',
      material: '코튼 혼방',
      weight: '90g',
      badge: null,
      sizes: 'FREE',
      colors: 'BLACK,GREY,PURPLE',
      image: '🧦',
      featured: true,
    },
    {
      slug: 'fyf-perf-crew-tee',
      name: 'FYF PERF CREW TEE',
      line: 'CORE',
      character: null,
      price: 39000,
      description: '크루 기본 러닝 티셔츠',
      story: '가장 기본. 가장 자주 입는다.',
      material: '폴리 88% / 스판 12%',
      weight: '140g',
      badge: null,
      sizes: 'XS,S,M,L,XL',
      colors: 'BLACK,WHITE,PURPLE',
      image: '👕',
      featured: false,
    },
    {
      slug: 'bunker-cap-black',
      name: 'BUNKER CAP BLACK',
      line: 'GOODS',
      character: null,
      price: 49000,
      description: 'FYF 워드마크 자수 캡',
      story: '벙커에 들어온 자의 증표.',
      material: '코튼 100%',
      weight: '110g',
      badge: 'NEW',
      sizes: 'FREE',
      colors: 'BLACK',
      image: '🧢',
      featured: false,
    },
    {
      slug: 'origin-track-jacket',
      name: 'CATTIVO ORIGIN TRACK JACKET',
      line: 'FLOW',
      character: 'cattivo',
      price: 149000,
      description: '빈티지 트랙자켓. 번개 자수.',
      story: '카티보가 처음 달리던 날 입었던 자켓.',
      material: '폴리 100%',
      weight: '420g',
      badge: null,
      sizes: 'S,M,L,XL',
      colors: 'BLACK-PURPLE',
      image: '🧥',
      featured: false,
    },
    {
      slug: 'echo-mint-hoodie',
      name: 'ECHO MINT HOODIE',
      line: 'FLOW',
      character: 'echo',
      price: 99000,
      description: '에코 민트그린 후디. 시즌2 한정.',
      story: '에코가 에코덤에서 입던 오버사이즈 후디.',
      material: '코튼 70% / 폴리 30%',
      weight: '450g',
      badge: 'ANOMALY',
      sizes: 'XS,S,M,L',
      colors: 'MINT',
      image: '🎵',
      featured: false,
    },
    {
      slug: 'bunker-hoodie-purple',
      name: 'BUNKER PURPLE HOODIE',
      line: 'CORE',
      character: null,
      price: 109000,
      description: '벙커 로고 퍼플 후디',
      story: '벙커의 색.',
      material: '코튼 70% / 폴리 30%',
      weight: '480g',
      badge: null,
      sizes: 'S,M,L,XL',
      colors: 'PURPLE',
      image: '👕',
      featured: false,
    },
  ];

  for (const p of products) {
    await db.product.create({ data: p });
  }

  // Demo crew account
  const hashedPw = await bcrypt.hash('fyf1234', 10);
  await db.crew.create({
    data: {
      crewNumber: '00001',
      email: 'demo@fyf.run',
      password: hashedPw,
      crewName: 'DEMO_CREW',
      favChar: 'cattivo',
      runStyle: 'long',
      points: 15200,
      rank: 'RUNNER',
    },
  });

  console.log(`✅ Seeded ${products.length} products, 5 characters, 1 demo crew`);
  console.log('   Demo login: demo@fyf.run / fyf1234');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await db.$disconnect();
  });
