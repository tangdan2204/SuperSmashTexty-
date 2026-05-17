// Unlock definitions - defines all unlockable content

// Character unlocks
export const CHARACTER_UNLOCKS = {
    survivor: {
        name: '幸存者',
        description: '均衡的起始角色。没有弱点，但也没有特长。',
        cost: 0,
        unlockedByDefault: true,
        char: '@',
        color: [100, 150, 255],
        stats: {
            health: 100,
            speed: 150,
            damage: 10
        },
        weapon: 'pistol',
        ability: 'xpBoost' // +10% XP gain
    },
    scout: {
        name: '侦察兵',
        description: '快速但脆弱。移速+30%，生命值-20%。为灵活玩家设计。',
        cost: 0, // Unlocked by completing Floor 2
        unlockedByDefault: false,
        unlockRequirement: { type: 'floor', value: 2 },
        char: '▶',
        color: [255, 255, 100],
        stats: {
            health: 75,
            speed: 200,
            damage: 8
        },
        weapon: 'smg',
        ability: 'speedBoost' // +20% speed, +10% dodge chance
    },
    tank: {
        name: '坦克',
        description: '缓慢但坚韧。生命值+50%，移速-25%。适合正面硬扛。',
        cost: 0, // Unlocked by completing Floor 3
        unlockedByDefault: false,
        unlockRequirement: { type: 'floor', value: 3 },
        char: '█',
        color: [150, 150, 150],
        stats: {
            health: 150,
            speed: 100,
            damage: 12
        },
        weapon: 'shotgun',
        ability: 'tankStats' // +25% health, +15% damage reduction
    },
    sniper: {
        name: '狙击手',
        description: '远程精英。伤害+40%，射速-30%。精准制胜。',
        cost: 0, // Unlocked by completing Floor 3
        unlockedByDefault: false,
        unlockRequirement: { type: 'floor', value: 3 },
        char: '▲',
        color: [100, 255, 255],
        stats: {
            health: 80,
            speed: 120,
            damage: 20
        },
        weapon: 'sniper',
        ability: 'critBoost' // +50% crit chance, +25% crit damage (requires crit system)
    },
    pyro: {
        name: '火焰兵',
        description: '火焰专精。灼烧伤害+50%，爆炸范围+25%。焚尽一切。',
        cost: 0, // Unlocked by completing Floor 2
        unlockedByDefault: false,
        unlockRequirement: { type: 'floor', value: 2 },
        char: '★',
        color: [255, 150, 50],
        stats: {
            health: 90,
            speed: 150,
            damage: 12
        },
        weapon: 'flamethrower',
        ability: 'fireDot' // +25% fire DoT (requires DoT system)
    },
    // === NEW CHARACTERS (achievement-locked) ===
    bomber: {
        name: '爆破手',
        description: '爆炸专家。爆炸伤害+60%，移速-15%。轰天撼地。',
        cost: 0,
        unlockedByDefault: false,
        unlockRequirement: { type: 'achievement', value: 'boss10' },
        char: '●',
        color: [255, 100, 100],
        stats: {
            health: 85,
            speed: 130,
            damage: 15
        },
        weapon: 'launcher',
        ability: 'explosiveShots' // Projectiles explode, +50% blast radius
    },
    engineer: {
        name: '工程师',
        description: '轨道大师。自带1个轨道无人机，轨道伤害+30%。',
        cost: 0,
        unlockedByDefault: false,
        unlockRequirement: { type: 'achievement', value: 'level20' },
        char: '◆',
        color: [100, 200, 255],
        stats: {
            health: 80,
            speed: 140,
            damage: 8
        },
        weapon: 'pistol',
        ability: 'orbitalDrones' // Start with 2 orbital drones
    },
    vampire: {
        name: '吸血鬼',
        description: '暗夜猎手。5%生命偷取，生命值-30%。杀戮即治愈。',
        cost: 0,
        unlockedByDefault: false,
        unlockRequirement: { type: 'achievement', value: 'kill1000' },
        char: '♦',
        color: [180, 50, 180],
        stats: {
            health: 70,
            speed: 160,
            damage: 14
        },
        weapon: 'smg',
        ability: 'vampiric' // +15% lifesteal, -20% max health
    },
    berserker: {
        name: '狂战士',
        description: '嗜血战士。生命值越低伤害越高，但无法自然回血。',
        cost: 0,
        unlockedByDefault: false,
        unlockRequirement: { type: 'achievement', value: 'glassCannonWin' },
        char: '▼',
        color: [255, 50, 50],
        stats: {
            health: 120,
            speed: 140,
            damage: 18
        },
        weapon: 'shotgun',
        ability: 'rage' // +100% damage below 30% HP, +25% damage taken
    },
    ghost: {
        name: '幽灵',
        description: '虚影行者。15%闪避率，暴击+20%，生命值-25%。飘忽不定。',
        cost: 0,
        unlockedByDefault: false,
        unlockRequirement: { type: 'achievement', value: 'perfectFloor' },
        char: '◊',
        color: [200, 200, 255],
        stats: {
            health: 60,
            speed: 180,
            damage: 11
        },
        weapon: 'smg',
        ability: 'ethereal' // +25% dodge, +15% crit chance
    }
};

// Weapon unlocks
export const WEAPON_UNLOCKS = {
    default: {
        name: '默认武器',
        description: '标准配枪。中等射速，中等伤害。可靠的选择。',
        cost: 0,
        unlockedByDefault: true
    },
    spreadShot: {
        name: '散射弹',
        description: '三连散射。近距离伤害高，远距离分散。',
        cost: 250,
        unlockedByDefault: false,
        unlockRequirement: { type: 'floor', value: 2 }
    },
    boomerang: {
        name: '回旋冲击波',
        description: '发射可回旋的飞弹。去时打，回来还打。',
        cost: 400,
        unlockedByDefault: false,
        unlockRequirement: { type: 'floor', value: 3 }
    },
    chainLightning: {
        name: '连锁闪电',
        description: '闪电在敌人之间跳跃。群聚敌人的克星。',
        cost: 500,
        unlockedByDefault: false,
        unlockRequirement: { type: 'floor', value: 3 }
    },
    railgun: {
        name: '电磁轨道炮',
        description: '穿透射线。射速慢但威力巨大，一发贯穿多个敌人。',
        cost: 600,
        unlockedByDefault: false,
        unlockRequirement: { type: 'floor', value: 4 },
        requiredAchievement: 'boss25'
    },
    homingMissiles: {
        name: '追踪导弹',
        description: '自动追踪最近的敌人。不用瞄准，让导弹说话。',
        cost: 700,
        unlockedByDefault: false,
        unlockRequirement: { type: 'floor', value: 4 }
    },
    plasmaRifle: {
        name: '等离子步枪',
        description: '高伤害能量步枪。射速略慢但每发都很痛。',
        cost: 800,
        unlockedByDefault: false,
        unlockRequirement: { type: 'floor', value: 5 },
        requiredAchievement: 'floor10'
    }
};

// Cosmetic unlocks - visual customizations (unlocked via achievements)
export const COSMETIC_UNLOCKS = {
    // === Player Trails ===
    trailNone: {
        name: '无尾迹',
        description: '默认外观',
        cost: 0,
        unlockedByDefault: true,
        category: 'trail'
    },
    trailFire: {
        name: '火焰尾迹',
        description: '移动时身后留下火焰痕迹。',
        cost: 0,
        unlockedByDefault: false,
        category: 'trail',
        color: [255, 100, 50],
        requiredAchievement: 'kill100'
    },
    trailIce: {
        name: '冰霜尾迹',
        description: '移动时身后留下冰晶路径。',
        cost: 0,
        unlockedByDefault: false,
        category: 'trail',
        color: [100, 200, 255],
        requiredAchievement: 'floor5'
    },
    trailPoison: {
        name: '剧毒尾迹',
        description: '移动时身后散发毒雾。',
        cost: 0,
        unlockedByDefault: false,
        category: 'trail',
        color: [100, 255, 100],
        requiredAchievement: 'kill500'
    },
    trailShadow: {
        name: '暗影尾迹',
        description: '移动时留下幽暗残影。',
        cost: 0,
        unlockedByDefault: false,
        category: 'trail',
        color: [80, 50, 120],
        requiredAchievement: 'firstSynergy'
    },
    trailRainbow: {
        name: '彩虹尾迹',
        description: '移动时绽放彩虹光芒。',
        cost: 0,
        unlockedByDefault: false,
        category: 'trail',
        color: 'rainbow',
        requiredAchievement: 'synergyMaster'
    },

    // === Death Effects ===
    deathNone: {
        name: '标准死亡',
        description: '默认敌人死亡效果',
        cost: 0,
        unlockedByDefault: true,
        category: 'death'
    },
    deathExplosion: {
        name: '爆炸死亡',
        description: '击杀敌人时产生华丽爆炸。',
        cost: 0,
        unlockedByDefault: false,
        category: 'death',
        requiredAchievement: 'firstBoss'
    },
    deathDisintegrate: {
        name: '解体效果',
        description: '敌人被击杀时分解为碎片。',
        cost: 0,
        unlockedByDefault: false,
        category: 'death',
        requiredAchievement: 'boss5'
    },
    deathVaporize: {
        name: '蒸发效果',
        description: '敌人被击杀时化为一缕青烟。',
        cost: 0,
        unlockedByDefault: false,
        category: 'death',
        requiredAchievement: 'killStreak10'
    },
    deathPixelate: {
        name: '像素化效果',
        description: '敌人被击杀时碎成像素。',
        cost: 0,
        unlockedByDefault: false,
        category: 'death',
        requiredAchievement: 'multikill'
    },
    deathFireworks: {
        name: '烟花效果',
        description: '击杀敌人绽放绚烂烟火。',
        cost: 0,
        unlockedByDefault: false,
        category: 'death',
        requiredAchievement: 'floor10'
    },

    // === Player Glow ===
    glowNone: {
        name: '无光环',
        description: '默认外观',
        cost: 0,
        unlockedByDefault: true,
        category: 'glow'
    },
    glowGold: {
        name: '金色光环',
        description: '角色周身散发金色光芒。',
        cost: 0,
        unlockedByDefault: false,
        category: 'glow',
        color: [255, 200, 50],
        requiredAchievement: 'earn500'
    },
    glowCrimson: {
        name: '猩红光环',
        description: '角色被血色光芒笼罩。',
        cost: 0,
        unlockedByDefault: false,
        category: 'glow',
        color: [200, 50, 50],
        requiredAchievement: 'closeCall'
    },
    glowElectric: {
        name: '电弧光环',
        description: '角色周身缠绕闪电。',
        cost: 0,
        unlockedByDefault: false,
        category: 'glow',
        color: [100, 150, 255],
        requiredAchievement: 'speedRunner'
    },
    glowVoid: {
        name: '虚空光环',
        description: '角色周身环绕暗紫能量。',
        cost: 0,
        unlockedByDefault: false,
        category: 'glow',
        color: [50, 0, 80],
        requiredAchievement: 'perfectFloor'
    }
};

// Run Boosters - one-time consumables for next run
export const RUN_BOOSTER_UNLOCKS = {
    healthPack: {
        name: '生命补给包',
        description: '开始时额外25点生命值。',
        cost: 30,
        consumable: true,
        effect: { type: 'startingHealth', value: 30 }
    },
    damageAmp: {
        name: '伤害增幅器',
        description: '开始时伤害+15%。',
        cost: 35,
        consumable: true,
        effect: { type: 'tempDamage', value: 0.25, duration: 'floor' }
    },
    speedSerum: {
        name: '速度血清',
        description: '开始时移速+20%。',
        cost: 25,
        consumable: true,
        effect: { type: 'tempSpeed', value: 0.30, duration: 'floor' }
    },
    wealthCharm: {
        name: '财运护符',
        description: '银币掉率+30%。',
        cost: 50,
        consumable: true,
        effect: { type: 'creditMultiplier', value: 0.30, duration: 'run' }
    },
    luckyCoin: {
        name: '幸运硬币',
        description: '开始时暴击率+10%。',
        cost: 40,
        consumable: true,
        effect: { type: 'tempCrit', value: 0.15, duration: 'floor' }
    },
    armorPlating: {
        name: '装甲板',
        description: '开始时减伤10%。',
        cost: 45,
        consumable: true,
        effect: { type: 'tempDefense', value: 0.20, duration: 'floor' }
    },
    xpBooster: {
        name: '经验加成器',
        description: '经验获取+20%。',
        cost: 40,
        consumable: true,
        effect: { type: 'tempXP', value: 0.50, duration: 'floor' }
    },
    emergencyRevive: {
        name: '紧急复活',
        description: '死亡时自动复活一次（25%生命值）。',
        cost: 75,
        consumable: true,
        effect: { type: 'autoRevive', value: 0.25, uses: 1 }
    }
};

// Permanent upgrade unlocks
export const PERMANENT_UPGRADE_UNLOCKS = {
    // === TIER 1: Basic Stats (cheap, essential) ===
    startingHealth: {
        name: '厚皮',
        description: '每级+5最大生命值',
        cost: 50,
        maxLevel: 5,
        tier: 1
    },
    startingDamage: {
        name: '力量核心',
        description: '每级+5%基础伤害',
        cost: 75,
        maxLevel: 5,
        tier: 1
    },
    startingSpeed: {
        name: '快步',
        description: '每级+3%移速',
        cost: 60,
        maxLevel: 5,
        tier: 1
    },

    // === TIER 2: Utility (moderate cost) ===
    xpMagnet: {
        name: '经验磁铁',
        description: '每级+8%经验获取',
        cost: 60,
        maxLevel: 5,
        tier: 2
    },
    propDurability: {
        name: '拾荒者',
        description: '每级+10%拾取范围',
        cost: 80,
        maxLevel: 5,
        tier: 2
    },
    propDropChance: {
        name: '身经百战',
        description: '每级+3%减伤',
        cost: 100,
        maxLevel: 5,
        tier: 2
    },
    creditBonus: {
        name: '财运亨通',
        description: '每级+8%银币掉率',
        cost: 120,
        maxLevel: 5,
        tier: 2
    },

    // === TIER 3: Combat (higher cost) ===
    luckyStart: {
        name: '锐目',
        description: '每级+5%暴击率',
        cost: 100,
        maxLevel: 4,
        tier: 3
    },
    thickSkin: {
        name: '重甲',
        description: '每级+3护甲值',
        cost: 100,
        maxLevel: 5,
        tier: 3
    },
    secondWind: {
        name: '吸血之触',
        description: '每级+1%生命偷取',
        cost: 150,
        maxLevel: 4,
        tier: 3
    },
    bossBounty: {
        name: '荆棘外皮',
        description: '每级反弹3%受到的伤害',
        cost: 150,
        maxLevel: 3,
        tier: 3
    },

    // === TIER 4: Premium (expensive, powerful) ===
    mulligan: {
        name: '灵巧',
        description: '每级+2%闪避率',
        cost: 300,
        maxLevel: 3,
        tier: 4
    },
    comfortZone: {
        name: '稳定瞄准',
        description: '每级+5%射速',
        cost: 200,
        maxLevel: 3,
        tier: 4
    },
    toughChoices: {
        name: '疾风连击',
        description: '每级+5%弹速',
        cost: 500,
        maxLevel: 1,
        tier: 4
    },
    headStart: {
        name: '扩大爆破',
        description: '每级+5%爆炸范围',
        cost: 750,
        maxLevel: 1,
        tier: 4
    }
};

// Get all unlocks for a category
export function getUnlocksForCategory(category) {
    switch (category) {
        case 'characters':
            return CHARACTER_UNLOCKS;
        case 'weapons':
            return WEAPON_UNLOCKS;
        case 'permanentUpgrades':
            return PERMANENT_UPGRADE_UNLOCKS;
        case 'cosmetics':
            return COSMETIC_UNLOCKS;
        case 'boosters':
            return RUN_BOOSTER_UNLOCKS;
        default:
            return {};
    }
}

// Get unlock info
export function getUnlockInfo(category, key) {
    const unlocks = getUnlocksForCategory(category);
    return unlocks[key] || null;
}

// Get cosmetics by sub-category (trail, death, glow)
export function getCosmeticsByType(type) {
    return Object.entries(COSMETIC_UNLOCKS)
        .filter(([key, item]) => item.category === type)
        .reduce((acc, [key, item]) => ({ ...acc, [key]: item }), {});
}

