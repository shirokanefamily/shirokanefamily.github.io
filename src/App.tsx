import { useEffect, useRef, useState } from 'react'

type Sister = {
  name: string
  nickname: string
  quote: string
  bio: string
  color: string
  accent: string
  avatar: string
   socials: {
    osu?: string
    discord?: string
  }
}

const sisters: Sister[] = [
  {
    name: 'Shoka Shirokane',
    nickname: '初夏白金',
    quote: 'Moe moe kyun~',
    bio: 'Former Sister, she is multimode player and strong at taiko. Her goal is get 7kpp at all mode but something bad happened so she decided to become a mapper, now she have 1 ranked beatmap at mania 6K',
    color: '#7dd3a8',
    accent: '#d8efff',
    avatar: './assets/shoka.png',
     socials: { 
    discord: 'https://discord.com/users/1093105047996465233',
    osu: 'https://osu.ppy.sh/users/33461938',
  }
  },

  {
    name: 'Shizu Shirokane',
    nickname: '静白金',
    quote: 'Shizu bel',
    bio: ' 1st brother, he`s a 4k mania player at 9th dan, average rice farmer but doesn`t actually play the game that much, touched std a bit and that`s it.',
    color: '#8dc8ed',
    accent: '#d8efff',
    avatar: './assets/shizu.png',
    socials: {
      discord: 'https://discord.com/users/993465312500527144',
      osu: 'https://osu.ppy.sh/users/36781676',
    }
  },

  {
    name: 'Mita Shirokane',
    nickname: 'Мита',
    quote: 'Mita ep pe et',
    bio: '2nd sister, she`s a decent standard player, also really good at FPS games, joined after Shizu Shirokane.',
    color: '#ef918c',
    accent: '#ffe0dd',
    avatar: './assets/mita.jpg',
    socials: {
      discord: 'https://discord.com/users/1034103806536978453',
      osu: 'https://osu.ppy.sh/users/33079130',
    }
  },

  {
    name: 'Yuuki Shirokane',
    nickname: '勇気白金',
    quote: 'chan bo may di',
    bio: 'The 3rd sister, slightly worse at std than Mita but still improving, played a little bit of other gamemodes, joined after Mita Shirokane.',
    color: '#8dc8ed',
    accent: '#d8efff',
    avatar: './assets/yuuki.jpg',
    socials: {
      discord: 'https://discord.com/users/1053613020338728961',
      osu: 'https://osu.ppy.sh/users/34605776',
    }
  },

  {
    name: 'Fuyu Shirokane',
    nickname: '冬白金',
    quote: 'con cao beo',
    bio:'The 4th brother, the absolute strongest mania player of the family with over 10kpp at both 4 and 7k. Joined after Yuuki Shirokane.',
    color: '#eebf73',
    accent: '#fff0ca',
    avatar: './assets/fuyu.png',
    socials: {
      discord: 'https://discord.com/users/874515432298659850',
      osu: 'https://osu.ppy.sh/users/36639028',
    }
  },

  {
    name: 'Ayoko Shirokane',
    nickname: '吾夜子白金',
    quote: 'niggger',
    bio:'The 5th sister, std main with a little bit of mania. Join after Fuyu Shirokane (wtf she won 1 year os)',
    color: '#b7a7e8',
    accent: '#e9e3ff',
    avatar: './assets/ayoko.png',
    socials: {
      discord: 'https://discord.com/users/904895148700348437',
      osu: 'https://osu.ppy.sh/users/36236118',
    }
  },

  {
    name: 'Sopia Shirokane',
    nickname: 'ソピア白金',
    quote: 'fembi giong hay',
    bio:' The 6th sister. The best std player in the family, spent some time playing mania and ctb too, peaked a while ago and slowly declining right now tho, joined after Ayoko Shirokane.',
    color: '#681993',
    accent: '#e5dffb',
    avatar: './assets/sopia.png',
    socials: {
      discord: 'https://discord.com/users/891082078383382548',
      osu: 'https://osu.ppy.sh/users/35456979',
    }
  },

  {
    name: 'Kuru Shirokane',
    nickname: 'クル白金',
    quote: 'anh nao day hoc IT',
    bio:'The 7th brother. A taiko main with over 8kpp, also playing tournaments. Decent skillset spread over other gamemodes too. Joined after Sopia Shirokane.',
    color: '#9589cf',
    accent: '#e5dffb',
    avatar: './assets/kuru.png',
    socials: {
      discord: 'https://discord.com/users/652844542881693710',
      osu: 'https://osu.ppy.sh/users/29662189',
    }
  },

  {
    name: 'Ahiru Shirokane',
    nickname: 'アヒル白金',
    quote: 'lorem ipsum dolor sit amet',
    bio: '8th brother. A std player (yes thats it about him we dont even see him that often actually). Joined after Kuru Shirokane.',
    color: '#79b8e3',
    accent: '#dceeff',
    avatar: './assets/ahiru.png',
    socials: {
      discord: 'https://discord.com/users/943810069051609200',
      osu: 'https://osu.ppy.sh/users/38441565',
    }
  },

  {
    name: 'Huna Shirokane',
    nickname: 'フナ白金',
    quote: 'lorem ipsum dolor sit amet',
    bio: '9th sister. Std main, with a little bit of mania and ctb. Joined after Ahiru Shirokane.',
    color: '#b7a7e8',
    accent: '#e9e3ff',
    avatar: './assets/huna.png',
    socials: {
      discord: 'https://discord.com/users/392482017712930836',
      osu: 'https://osu.ppy.sh/users/28032394',
    } 
  },

  {
    name: 'Mofu Shirokane',
    nickname: 'モフ白金',
    quote: 'sinh vien bach khoa',
    bio: '10th sister. Strong taiko main, also has around 1kpp on other modes (she beat an insane demon in gd and is going for her first extreme in gd btw). Joined after Huna Shirokane.',
    color: '#ffd9e5',
    accent: '#fff0ca',
    avatar: './assets/mofu.png',
    socials: {
      discord: 'https://discord.com/users/944864649407528972',
      osu: 'https://osu.ppy.sh/users/28185479',
    }
  },

  {
    name: 'Izumi Shirokane',
    nickname: '泉水白金',
    quote: 'lorem ipsum dolor sit amet',
    bio: '11th sister. Another 4K mania masher. Main rice and jack is best skill, join after Mofu Shirokane.',
    color: '#eebf73',
    accent: '#fff0ca',
    avatar: './assets/izumi.png',
    socials: {
      discord: 'https://discord.com/users/1021040111997165600',
      osu: 'https://osu.ppy.sh/users/36741326',
    }
  },

  {
    name: 'Izuna Shirokane',
    nickname: '泉那白金',
    quote: 'shizu la ca cuoc doi',
    bio: '11th sister. Best ctb player of the family (almost 3 digits) with some mania. Joined after Mofu Shirokane.',
    color: '#72bda5',
    accent: '#d9f3eb',
    avatar: './assets/izuna.png',
    socials: {
      discord: 'https://discord.com/users/977761484354490388',
      osu: 'https://osu.ppy.sh/users/35689909',
    }
  },

  {
    name: 'Sora Shirokane',
    nickname: '空白金',
    quote: 'random kid',
    bio: '12th sister. Decent std player, improving in mania. Joined after Izuna Shirokane.',
    color: '#7fc7d8',
    accent: '#d8f4fa',
    avatar: './assets/sora.png',
    socials: {
      discord: 'https://discord.com/users/937726510796779560',
      osu: 'https://osu.ppy.sh/users/33555707',
    }
  },

]

function Icon({ name }: { name: 'arrow' | 'close' | 'link' | 'sparkle' }) {
  if (name === 'close') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
  }
  if (name === 'link') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 5h5v5M19 5l-8 8M18 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" /></svg>
  }
  if (name === 'sparkle') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c.5 5.8 4.2 9.5 10 10-5.8.5-9.5 4.2-10 10-.5-5.8-4.2-9.5-10-10 5.8-.5 9.5-4.2 10-10Z" /></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
}

function Avatar({
  sister,
  large = false,
}: {
  sister: Sister
  large?: boolean
}) {
  return (
    <div
      className={`avatar ${large ? 'avatar--large' : ''}`}
      style={
        {
          '--hair': sister.color,
          '--halo': sister.accent,
        } as React.CSSProperties
      }
    >
      <img
        src={sister.avatar}
        alt={`${sister.name}'s avatar`}
      />
    </div>
  )
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(element)
      }
    }, { threshold: 0.12 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return <div ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>
}

function App() {
  const [selected, setSelected] = useState<Sister | null>(null)
  const [hasScrolled, setHasScrolled] = useState(false)

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 24)
    updateScrollState()
    window.addEventListener('scroll', updateScrollState, { passive: true })
    return () => window.removeEventListener('scroll', updateScrollState)
  }, [])

  useEffect(() => {
    if (!selected) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [selected])

  return (
    <main className={hasScrolled ? 'is-scrolled' : ''}>
      <section className="hero" aria-label="Shirokane's Family introduction">
        <div className="hero__blur" aria-hidden="true" />
        <div className="hero__cloud hero__cloud--one" />
        <div className="hero__cloud hero__cloud--two" />
        <div className="hero__sparkles" aria-hidden="true"><i /><i /><i /><i /></div>
        <div className="hero__content">
          <div className="hero__avatar-wrap">
            <div className="team-avatar-placeholder team-avatar-placeholder--filled">
              <img 
                  src = "./assets/team.png" />
               <span>Team avatar</span>
            </div>
          </div>
        </div>
        <div className="floating-brand">
          <div className="brand-avatar" aria-hidden="true">
            <div className="brand-avatar__faces">
              {sisters.slice(0, 3).map((sister) => (
                <Avatar sister={sister} key={sister.name} />
              ))}
            </div>
            <span>14</span>
          </div>
          <h1 className="written-title">Shirokane&apos;s Family</h1>
        </div>
      </section>

      <section className="family" id="family">
        <div className="doodle-line" aria-hidden="true" />
        <Reveal>
          <nav className="nav" aria-label="Main navigation">
            <a href="#family">Our family</a>
            <a href="#memories">Memories</a>
            <a href="#letters">Letters</a>
            <a href="#about">About us</a>
          </nav>
        </Reveal>

        <Reveal className="intro">
          <span className="eyebrow"><Icon name="sparkle" /> Welcome home</span>
          <h2>Meet the Shirokane sisters</h2>
          <p>
            Fourteen sisters, one very lively home, and a collection of stories
            we cannot wait to share. Choose a portrait to get to know us.
          </p>
        </Reveal>

        <div className="sister-grid">
          {sisters.map((sister, index) => (
            <Reveal className="card-reveal" key={sister.name}>
              <button
                className="sister-card"
                onClick={() => setSelected(sister)}
                style={{ '--card-accent': sister.color, '--card-soft': sister.accent, '--delay': `${(index % 4) * 70}ms` } as React.CSSProperties}
                aria-label={`Read ${sister.name}'s profile`}
              >
                <span className="sister-card__number">{String(index + 1).padStart(2, '0')}</span>
                <Avatar sister={sister} large />
                <span className="sister-card__name">{sister.name}</span>
                <span className="sister-card__hint">Meet <Icon name="arrow" /></span>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal className="more-section">
          <div className="more-section__copy">
            <span className="eyebrow"><Icon name="sparkle" /> More from our home</span>
            <h2>There are more stories waiting</h2>
          </div>
          <div className="page-links">
            <a href="#osu"><span>01</span><b>osu! team</b><Icon name="arrow" /></a>
            <a href="#letters"><span>02</span><b>Facebook Page</b><Icon name="arrow" /></a>
            <a href="#about"><span>03</span><b>Discord</b><Icon name="arrow" /></a>
          </div>
        </Reveal>
      </section>

      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={() => setSelected(null)}>
          <section
            className="profile-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="profile-title"
            onMouseDown={(event) => event.stopPropagation()}
            style={{ '--profile-color': selected.color, '--profile-soft': selected.accent } as React.CSSProperties}
          >
            <button className="modal-close" onClick={() => setSelected(null)} aria-label="Close profile">
              <Icon name="close" />
            </button>
            <div className="profile-modal__visual">
              <span className="profile-modal__label">{selected.nickname}</span>
              <Avatar sister={selected} large />
              <span className="profile-modal__flower flower--one" />
              <span className="profile-modal__flower flower--two" />
            </div>
            <div className="profile-modal__content">
              <span className="eyebrow">Shirokane sister</span>
              <h2 id="profile-title">{selected.name}</h2>
              <blockquote>“{selected.quote}”</blockquote>
              <p className="profile-modal__bio">{selected.bio}</p>
              <dl>
                <div><dt>Call me</dt><dd>{selected.nickname}</dd></div>
              </dl>
              <div className="social-links">
  {selected.socials.discord && (
    <a
      href={selected.socials.discord}
      target="_blank"
      rel="noopener noreferrer"
    >
      Discord
      <Icon name="link" />
    </a>
  )}

  {selected.socials.osu && (
    <a
      href={selected.socials.osu}
      target="_blank"
      rel="noopener noreferrer"
    >
      Osu! Profile
      <Icon name="link" />
    </a>
  )}
</div>
            </div>
          </section>
        </div>
      )}
    </main>
  )
}
// chit yuuki bel

export default App