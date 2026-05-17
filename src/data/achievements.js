// Achievement definitions - expanded achievement system with difficulty tiers and shop unlocks

export const ACHIEVEMENTS = {
    // =============================================================================
    // PROGRESSION ACHIEVEMENTS (normal difficulty)
    // =============================================================================
    floor2: {
        id: 'floor2',
        name: '第二层',
        description: '到达第2层',
        category: 'progression',
        icon: '2️⃣',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'bestFloor', value: 2 },
        hint: '继续深入...'
    },
    floor3: {
        id: 'floor3',
        name: '第三层',
        description: '到达第3层',
        category: 'progression',
        icon: '3️⃣',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'bestFloor', value: 3 },
        hint: '继续深入...'
    },
    floor5: {
        id: 'floor5',
        name: '探险家',
        description: '到达第5层',
        category: 'progression',
        icon: '5️⃣',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'bestFloor', value: 5 },
        hint: '坚持就是胜利',
        unlocks: ['trailIce']
    },
    floor10: {
        id: 'floor10',
        name: '深渊行者',
        description: '到达第10层',
        category: 'progression',
        icon: '🔟',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'bestFloor', value: 10 },
        hint: '你能走多远？',
        unlocks: ['plasmaRifle']
    },
    firstSynergy: {
        id: 'firstSynergy',
        name: '协同效应',
        description: '首次触发升级协同',
        category: 'progression',
        icon: '🔗',
        unlocked: false,
        difficulty: 'normal',
        hint: '搭配升级看看效果',
        unlocks: ['trailShadow']
    },
    allCharacters: {
        id: 'allCharacters',
        name: '全明星阵容',
        description: '解锁所有角色',
        category: 'progression',
        icon: '👥',
        unlocked: false,
        difficulty: 'normal',
        hint: '尝试解锁每个角色'
    },
    maxUpgrade: {
        id: 'maxUpgrade',
        name: '满级强化',
        description: '将一个升级叠满',
        category: 'progression',
        icon: '⬆️',
        unlocked: false,
        difficulty: 'normal',
        hint: '同一升级可以多次选择'
    },
    firstDoor: {
        id: 'firstDoor',
        name: '第一扇门',
        description: '首次进入Boss门',
        category: 'progression',
        icon: '🚪',
        unlocked: false,
        difficulty: 'normal',
        hint: '清理完房间找找门'
    },

    // =============================================================================
    // COMBAT ACHIEVEMENTS (normal difficulty)
    // =============================================================================
    firstKill: {
        id: 'firstKill',
        name: '初次击杀',
        description: '消灭第一个敌人',
        category: 'combat',
        icon: '🩸',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalEnemiesKilled', value: 1 },
        hint: '朝他们开火！'
    },
    kill100: {
        id: 'kill100',
        name: '百人斩',
        description: '一局中消灭100个敌人',
        category: 'combat',
        icon: '⚔️',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalEnemiesKilled', value: 100 },
        hint: '继续战斗',
        unlocks: ['trailFire']
    },
    kill500: {
        id: 'kill500',
        name: '屠杀者',
        description: '一局中消灭500个敌人',
        category: 'combat',
        icon: '🗡️',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalEnemiesKilled', value: 500 },
        hint: '大开杀戒',
        unlocks: ['trailPoison']
    },
    kill1000: {
        id: 'kill1000',
        name: '毁灭者',
        description: '一局中消灭1000个敌人',
        category: 'combat',
        icon: '💀',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalEnemiesKilled', value: 1000 },
        hint: '成为战场终结者'
    },
    killStreak10: {
        id: 'killStreak10',
        name: '十连杀',
        description: '连续击杀10个敌人不中断',
        category: 'combat',
        icon: '🔥',
        unlocked: false,
        difficulty: 'challenge',
        hint: '保持攻势',
        unlocks: ['deathVaporize']
    },
    multikill: {
        id: 'multikill',
        name: '多重击杀',
        description: '同时消灭3个或以上敌人',
        category: 'combat',
        icon: '💥',
        unlocked: false,
        difficulty: 'challenge',
        hint: '群聚的敌人是好目标',
        unlocks: ['deathPixelate']
    },

    // =============================================================================
    // BOSS ACHIEVEMENTS
    // =============================================================================
    firstBoss: {
        id: 'firstBoss',
        name: '弑Boss者',
        description: '击败第一个Boss',
        category: 'boss',
        icon: '👹',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalBossesKilled', value: 1 },
        hint: '每层的最后一个房间...',
        unlocks: ['deathExplosion']
    },
    boss5: {
        id: 'boss5',
        name: '猎头人',
        description: '累计击败5个Boss',
        category: 'boss',
        icon: '🎯',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalBossesKilled', value: 5 },
        hint: '继续挑战Boss',
        unlocks: ['deathDisintegrate']
    },
    boss10: {
        id: 'boss10',
        name: 'Boss老兵',
        description: '累计击败10个Boss',
        category: 'boss',
        icon: '🏆',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalBossesKilled', value: 10 },
        hint: '经验造就完美'
    },
    boss25: {
        id: 'boss25',
        name: 'Boss粉碎机',
        description: '累计击败25个Boss',
        category: 'boss',
        icon: '👊',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'totalBossesKilled', value: 25 },
        unlocks: ['railgun'],
        hint: '成为Boss猎杀专家'
    },
    boss50: {
        id: 'boss50',
        name: '终极猎手',
        description: '累计击败50个Boss',
        category: 'boss',
        icon: '💪',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'totalBossesKilled', value: 50 },
        hint: '成为Boss的噩梦'
    },
    minibossSlayer: {
        id: 'minibossSlayer',
        name: '精英杀手',
        description: '击败一个小Boss',
        category: 'boss',
        icon: '🎖️',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalMinibossesKilled', value: 10 },
        hint: '注意更大更强的敌人'
    },

    // =============================================================================
    // RUN ACHIEVEMENTS
    // =============================================================================
    firstRun: {
        id: 'firstRun',
        name: '首次上阵',
        description: '完成第一局游戏',
        category: 'run',
        icon: '🏃',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalRuns', value: 1 },
        hint: '开始一局游戏'
    },
    run10: {
        id: 'run10',
        name: '常客',
        description: '完成10局游戏',
        category: 'run',
        icon: '🎮',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalRuns', value: 10 },
        hint: '继续玩下去'
    },
    run50: {
        id: 'run50',
        name: '忠实玩家',
        description: '完成50局游戏',
        category: 'run',
        icon: '⭐',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalRuns', value: 50 },
        hint: '坚持就是胜利'
    },
    run100: {
        id: 'run100',
        name: '老手',
        description: '完成100局游戏',
        category: 'run',
        icon: '💯',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'totalRuns', value: 100 },
        hint: '百炼成钢'
    },
    quickDeath: {
        id: 'quickDeath',
        name: '速死',
        description: '在30秒内阵亡',
        category: 'run',
        icon: '💨',
        unlocked: false,
        difficulty: 'normal',
        hint: '有时候就是这样...'
    },
    longRun: {
        id: 'longRun',
        name: '马拉松',
        description: '一局存活超过15分钟',
        category: 'run',
        icon: '⏱️',
        unlocked: false,
        difficulty: 'challenge',
        hint: '尽可能撑久一点'
    },

    // =============================================================================
    // UPGRADE ACHIEVEMENTS
    // =============================================================================
    level10: {
        id: 'level10',
        name: '10级',
        description: '一局中达到10级',
        category: 'upgrade',
        icon: '📈',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'bestLevel', value: 10 },
        hint: '收集经验球'
    },
    level20: {
        id: 'level20',
        name: '20级',
        description: '一局中达到20级',
        category: 'upgrade',
        icon: '📊',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'bestLevel', value: 20 },
        hint: '持续收集经验'
    },
    level30: {
        id: 'level30',
        name: '30级强者',
        description: '一局中达到30级',
        category: 'upgrade',
        icon: '🚀',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'bestLevel', value: 30 },
        hint: '势不可挡'
    },
    level50: {
        id: 'level50',
        name: '满级大师',
        description: '一局中达到50级',
        category: 'upgrade',
        icon: '🌟',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'bestLevel', value: 50 },
        hint: '持续收集经验'
    },
    upgradeCollector: {
        id: 'upgradeCollector',
        name: '升级收藏家',
        description: '一局中获得15个不同升级',
        category: 'upgrade',
        icon: '🎒',
        unlocked: false,
        difficulty: 'normal',
        hint: '尝试各种升级'
    },
    synergyMaster: {
        id: 'synergyMaster',
        name: '协同大师',
        description: '一局中触发3个不同协同',
        category: 'upgrade',
        icon: '🔮',
        unlocked: false,
        difficulty: 'challenge',
        hint: '特定升级组合有奇效',
        unlocks: ['trailRainbow']
    },

    // =============================================================================
    // CURRENCY ACHIEVEMENTS
    // =============================================================================
    earn100: {
        id: 'earn100',
        name: '小财主',
        description: '一局中获得100银币',
        category: 'currency',
        icon: '🪙',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalCurrencyEarned', value: 100 },
        hint: '拾取银币'
    },
    earn500: {
        id: 'earn500',
        name: '储蓄达人',
        description: '累计获得500银币',
        category: 'currency',
        icon: '💵',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalCurrencyEarned', value: 500 },
        hint: '积少成多',
        unlocks: ['glowGold']
    },
    earn1000: {
        id: 'earn1000',
        name: '暴发户',
        description: '一局中获得1000银币',
        category: 'currency',
        icon: '💰',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalCurrencyEarned', value: 1000 },
        hint: '提升银币掉率'
    },
    earn5000: {
        id: 'earn5000',
        name: '大富翁',
        description: '累计获得5000银币',
        category: 'currency',
        icon: '💎',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'totalCurrencyEarned', value: 5000 },
        hint: '建立帝国'
    },
    earn10000: {
        id: 'earn10000',
        name: '亿万富翁',
        description: '一局中获得10000银币',
        category: 'currency',
        icon: '👑',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'totalCurrencyEarned', value: 10000 },
        hint: '使用财运升级'
    },
    bigSpender: {
        id: 'bigSpender',
        name: '挥金如土',
        description: '在商店花费5000银币',
        category: 'currency',
        icon: '🛒',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalCurrencySpent', value: 1000 },
        hint: '去商店逛逛'
    },

    // =============================================================================
    // CHALLENGE ACHIEVEMENTS (special conditions)
    // =============================================================================
    perfectFloor: {
        id: 'perfectFloor',
        name: '完美通关',
        description: '不受伤完成一整层',
        category: 'challenge',
        icon: '🛡️',
        unlocked: false,
        difficulty: 'challenge',
        hint: '闪避所有攻击',
        unlocks: ['glowVoid']
    },
    speedRunner: {
        id: 'speedRunner',
        name: '速通玩家',
        description: '10分钟内到达第5层',
        category: 'challenge',
        icon: '⚡',
        unlocked: false,
        difficulty: 'challenge',
        hint: '效率至上',
        unlocks: ['glowElectric']
    },
    bossRush: {
        id: 'bossRush',
        name: 'Boss连战',
        description: '一局中击败3个Boss',
        category: 'challenge',
        icon: '🏅',
        unlocked: false,
        difficulty: 'challenge',
        hint: '深入推进'
    },
    noHitBoss: {
        id: 'noHitBoss',
        name: '无伤Boss战',
        description: '不受伤击败一个Boss',
        category: 'challenge',
        icon: '✨',
        unlocked: false,
        difficulty: 'challenge',
        hint: '学习Boss的攻击模式'
    },
    glassCannonWin: {
        id: 'glassCannonWin',
        name: '玻璃大炮',
        description: '生命值低于25%时击败Boss',
        category: 'challenge',
        icon: '❤️‍🔥',
        unlocked: false,
        difficulty: 'challenge',
        hint: '危险的博弈'
    },
    closeCall: {
        id: 'closeCall',
        name: '死里逃生',
        description: '在生命值低于10时存活',
        category: 'challenge',
        icon: '😰',
        unlocked: false,
        difficulty: 'challenge',
        hint: '差一点...',
        unlocks: ['glowCrimson']
    },
    pacifist: {
        id: 'pacifist',
        name: '和平主义者',
        description: '在一个房间中不杀任何敌人通关',
        category: 'challenge',
        icon: '☮️',
        unlocked: false,
        difficulty: 'challenge',
        hint: '有时候跑就对了'
    },
    noDamageRoom: {
        id: 'noDamageRoom',
        name: '无伤通关',
        description: '不受伤清理一个房间',
        category: 'challenge',
        icon: '💫',
        unlocked: false,
        difficulty: 'challenge',
        hint: '完美操作'
    },

    // =============================================================================
    // BENCHMARK ACHIEVEMENTS (high targets)
    // =============================================================================
    kill5000: {
        id: 'kill5000',
        name: '杀神',
        description: '累计消灭5000个敌人',
        category: 'benchmark',
        icon: '🎖️',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'totalEnemiesKilled', value: 5000 },
        hint: '持之以恒'
    },
    kill10000: {
        id: 'kill10000',
        name: '万人斩',
        description: '累计消灭10000个敌人',
        category: 'benchmark',
        icon: '🏴',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'totalEnemiesKilled', value: 10000 },
        hint: '无人能挡'
    },
    floor15: {
        id: 'floor15',
        name: '深渊探索者',
        description: '到达第15层',
        category: 'benchmark',
        icon: '⛏️',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'bestFloor', value: 15 },
        hint: '继续深入'
    },
    floor20: {
        id: 'floor20',
        name: '深渊征服者',
        description: '到达第20层',
        category: 'benchmark',
        icon: '🌑',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'bestFloor', value: 20 },
        hint: '见证深渊'
    },
    rooms100: {
        id: 'rooms100',
        name: '百房征服',
        description: '累计清理100个房间',
        category: 'benchmark',
        icon: '🚪',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalRoomsCleared', value: 100 },
        hint: '多打几局'
    },
    rooms500: {
        id: 'rooms500',
        name: '五百房传奇',
        description: '累计清理500个房间',
        category: 'benchmark',
        icon: '🏛️',
        unlocked: false,
        difficulty: 'benchmark',
        threshold: { stat: 'totalRoomsCleared', value: 500 },
        hint: '坚持不懈'
    },

    // =============================================================================
    // SECRET/FUN ACHIEVEMENTS
    // =============================================================================
    firstPickup: {
        id: 'firstPickup',
        name: '拾荒者',
        description: '收集你的第一个掉落物',
        category: 'progression',
        icon: '🧲',
        unlocked: false,
        difficulty: 'normal',
        hint: '拾取生命、经验或其他物品'
    },
    healingAddict: {
        id: 'healingAddict',
        name: '治愈上瘾',
        description: '收集50个生命恢复物品',
        category: 'progression',
        icon: '❤️',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalHealthPickups', value: 50 },
        hint: '靠治疗活下去'
    },
    xpHoarder: {
        id: 'xpHoarder',
        name: '经验囤积者',
        description: '收集1000个经验球',
        category: 'progression',
        icon: '🟢',
        unlocked: false,
        difficulty: 'normal',
        threshold: { stat: 'totalXpOrbs', value: 1000 },
        hint: '收集那些绿色的球'
    },
    comeback: {
        id: 'comeback',
        name: '绝地反击',
        description: '在生命值低于10%时通关房间',
        category: 'challenge',
        icon: '🦸',
        unlocked: false,
        difficulty: 'challenge',
        hint: '永不放弃！'
    }
};

// Achievement difficulty colors for UI
export const ACHIEVEMENT_COLORS = {
    normal: [200, 200, 200],      // Gray - standard achievements
    challenge: [255, 200, 100],   // Gold - challenge achievements
    benchmark: [200, 150, 255]    // Purple - benchmark achievements
};

// Default credit rewards by difficulty (for achievements without unlocks)
export const ACHIEVEMENT_REWARDS = {
    normal: 25,
    challenge: 50,
    benchmark: 100
};

/**
 * Get the credit reward for an achievement
 * Returns 0 if achievement has unlocks (the unlock IS the reward)
 * @param {Object} achievement - Achievement object
 * @returns {number} Credit reward amount
 */
export function getAchievementReward(achievement) {
    if (!achievement) return 0;
    // If achievement unlocks something, no credit reward
    if (achievement.unlocks && achievement.unlocks.length > 0) return 0;
    // Use explicit reward if set, otherwise use difficulty default
    if (achievement.reward !== undefined) return achievement.reward;
    return ACHIEVEMENT_REWARDS[achievement.difficulty] || ACHIEVEMENT_REWARDS.normal;
}

// Get achievements by category
export function getAchievementsByCategory(category) {
    return Object.values(ACHIEVEMENTS).filter(ach => ach.category === category);
}

// Get achievements by difficulty
export function getAchievementsByDifficulty(difficulty) {
    return Object.values(ACHIEVEMENTS).filter(ach => ach.difficulty === difficulty);
}

// Get all achievement categories
export function getAchievementCategories() {
    const categories = new Set();
    Object.values(ACHIEVEMENTS).forEach(ach => categories.add(ach.category));
    return Array.from(categories);
}

// Get achievement by ID
export function getAchievementById(id) {
    return ACHIEVEMENTS[id] || null;
}

// Get all achievements that unlock shop items
export function getAchievementsWithUnlocks() {
    return Object.values(ACHIEVEMENTS).filter(ach => ach.unlocks && ach.unlocks.length > 0);
}

// Calculate achievement progress (for achievements with thresholds)
export function getAchievementProgress(achievementId, stats) {
    const achievement = ACHIEVEMENTS[achievementId];
    if (!achievement || !achievement.threshold) {
        return null;
    }

    const currentValue = stats[achievement.threshold.stat] || 0;
    const targetValue = achievement.threshold.value;
    const progress = Math.min(currentValue / targetValue, 1);

    return {
        current: currentValue,
        target: targetValue,
        progress: progress,
        percentage: Math.round(progress * 100)
    };
}
