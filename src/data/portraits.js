// Portrait definitions and unlock conditions
// Portraits are cosmetic profile images unlocked through gameplay

/**
 * Portrait categories for organization
 */
export const PORTRAIT_CATEGORIES = {
    LEVEL: 'level',      // Unlocked by reaching player levels
    CHARACTER: 'character', // Unlocked by unlocking characters
    ACHIEVEMENT: 'achievement', // Unlocked by achievements
    SPECIAL: 'special'   // Unlocked by special conditions
};

/**
 * Portrait definitions
 * Each portrait has:
 * - id: Unique identifier
 * - name: Display name
 * - icon: ASCII character or emoji to display
 * - category: Category for organization
 * - unlockCondition: How to unlock this portrait
 * - description: Flavor text
 */
export const PORTRAITS = {
    // ============ DEFAULT ============
    default: {
        id: 'default',
        name: '新手',
        icon: '😊',
        color: [200, 200, 200],
        category: PORTRAIT_CATEGORIES.LEVEL,
        unlockCondition: { type: 'default' },
        description: '每个人都有起点。'
    },

    // ============ LEVEL-BASED ============
    veteran: {
        id: 'veteran',
        name: '老兵',
        icon: '😎',
        color: [100, 200, 255],
        category: PORTRAIT_CATEGORIES.LEVEL,
        unlockCondition: { type: 'level', value: 10 },
        description: '身经百战的竞技者。'
    },
    elite: {
        id: 'elite',
        name: '精英',
        icon: '🌟',
        color: [255, 200, 100],
        category: PORTRAIT_CATEGORIES.LEVEL,
        unlockCondition: { type: 'level', value: 25 },
        description: '竞技场的顶尖高手。'
    },
    legend: {
        id: 'legend',
        name: '传奇',
        icon: '👑',
        color: [255, 100, 255],
        category: PORTRAIT_CATEGORIES.LEVEL,
        unlockCondition: { type: 'level', value: 50 },
        description: '名声响彻殿堂的活传奇。'
    },
    champion: {
        id: 'champion',
        name: '冠军',
        icon: '🏆',
        color: [255, 215, 0],
        category: PORTRAIT_CATEGORIES.LEVEL,
        unlockCondition: { type: 'level', value: 75 },
        description: '真正的冠军，征服了一切挑战。'
    },
    immortal: {
        id: 'immortal',
        name: '不朽',
        icon: '🔱',
        color: [200, 255, 255],
        category: PORTRAIT_CATEGORIES.LEVEL,
        unlockCondition: { type: 'level', value: 100 },
        description: '超越凡人。玩家中的神。'
    },

    // ============ CHARACTER-BASED ============
    survivor: {
        id: 'survivor',
        name: '幸存者',
        icon: '💪',
        color: [100, 200, 100],
        category: PORTRAIT_CATEGORIES.CHARACTER,
        unlockCondition: { type: 'character', value: 'survivor' },
        description: '默认英雄。永不放弃。'
    },
    berserker: {
        id: 'berserker',
        name: '狂战士',
        icon: '😡',
        color: [255, 100, 100],
        category: PORTRAIT_CATEGORIES.CHARACTER,
        unlockCondition: { type: 'character', value: 'berserker' },
        description: '化身愤怒。痛苦只是燃料。'
    },
    ranger: {
        id: 'ranger',
        name: '游侠',
        icon: '🎯',
        color: [100, 255, 150],
        category: PORTRAIT_CATEGORIES.CHARACTER,
        unlockCondition: { type: 'character', value: 'ranger' },
        description: '迅捷精准。远程致命。'
    },
    mage: {
        id: 'mage',
        name: '法师',
        icon: '🧙',
        color: [200, 100, 255],
        category: PORTRAIT_CATEGORIES.CHARACTER,
        unlockCondition: { type: 'character', value: 'mage' },
        description: '奥术大师。'
    },
    tank: {
        id: 'tank',
        name: '坦克',
        icon: '🛡️',
        color: [150, 150, 200],
        category: PORTRAIT_CATEGORIES.CHARACTER,
        unlockCondition: { type: 'character', value: 'tank' },
        description: '不动如山。无物可破。'
    },
    assassin: {
        id: 'assassin',
        name: '刺客',
        icon: '🗡️',
        color: [150, 100, 150],
        category: PORTRAIT_CATEGORIES.CHARACTER,
        unlockCondition: { type: 'character', value: 'assassin' },
        description: '无声致命。杀人于无形。'
    },

    // ============ ACHIEVEMENT-BASED ============
    boss_slayer: {
        id: 'boss_slayer',
        name: '弑Boss者',
        icon: '👹',
        color: [255, 180, 50],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'totalBossesKilled', value: 100 },
        description: '终结了100个Boss的统治。'
    },
    speedrunner: {
        id: 'speedrunner',
        name: '速通达人',
        icon: '⚡',
        color: [255, 255, 100],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'fastestRunTime', value: 600, comparison: 'lessThan' },
        description: '10分钟内完成一局。'
    },
    perfectionist: {
        id: 'perfectionist',
        name: '完美主义者',
        icon: '✨',
        color: [255, 255, 255],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'achievement', value: 'flawless_run' },
        description: '零伤害通关一整局。'
    },
    grinder: {
        id: 'grinder',
        name: '肝帝',
        icon: '⚙️',
        color: [200, 150, 100],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'totalRuns', value: 100 },
        description: '完成100局游戏。毅力的化身。'
    },
    collector: {
        id: 'collector',
        name: '收藏家',
        icon: '💰',
        color: [255, 215, 0],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'totalCurrencyEarned', value: 10000 },
        description: '累计获得10000银币。'
    },
    exterminator: {
        id: 'exterminator',
        name: '灭杀者',
        icon: '💀',
        color: [200, 50, 50],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'totalEnemiesKilled', value: 10000 },
        description: '消灭了10000个敌人。'
    },
    explorer: {
        id: 'explorer',
        name: '探索者',
        icon: '🧭',
        color: [100, 180, 100],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'bestFloor', value: 5 },
        description: '到达第5层。旅程才刚开始。'
    },
    delver: {
        id: 'delver',
        name: '深渊挖掘者',
        icon: '⛏️',
        color: [180, 140, 100],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'bestFloor', value: 10 },
        description: '到达第10层。深入未知。'
    },
    abyssal: {
        id: 'abyssal',
        name: '深渊之子',
        icon: '🌀',
        color: [80, 50, 150],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'bestFloor', value: 20 },
        description: '到达第20层。触碰了深渊。'
    },
    slayer: {
        id: 'slayer',
        name: '屠夫',
        icon: '⚔️',
        color: [200, 80, 80],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'totalBossesKilled', value: 25 },
        description: '击杀了25个Boss。'
    },
    warrior: {
        id: 'warrior',
        name: '战士',
        icon: '🗡️',
        color: [150, 150, 200],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'totalEnemiesKilled', value: 1000 },
        description: '击败了1000个敌人。'
    },
    rich: {
        id: 'rich',
        name: '富豪',
        icon: '💎',
        color: [100, 200, 255],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'totalCurrencyEarned', value: 50000 },
        description: '累计获得50000银币。奢华人生。'
    },
    dedicated: {
        id: 'dedicated',
        name: '坚守者',
        icon: '🎮',
        color: [150, 100, 200],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'totalRuns', value: 50 },
        description: '完成50局游戏。致力于磨练。'
    },
    marathoner: {
        id: 'marathoner',
        name: '马拉松选手',
        icon: '🏃',
        color: [100, 200, 150],
        category: PORTRAIT_CATEGORIES.ACHIEVEMENT,
        unlockCondition: { type: 'stat', stat: 'totalRoomsCleared', value: 500 },
        description: '清理了500个房间。耐力的化身。'
    }
};

/**
 * Get portrait by ID
 * @param {string} id - Portrait ID
 * @returns {Object|null} Portrait data or null
 */
export function getPortraitById(id) {
    return PORTRAITS[id] || null;
}

/**
 * Get all portraits
 * @returns {Array} Array of all portrait objects
 */
export function getAllPortraits() {
    return Object.values(PORTRAITS);
}

/**
 * Get portraits by category
 * @param {string} category - Category to filter by
 * @returns {Array} Array of portrait objects in that category
 */
export function getPortraitsByCategory(category) {
    return Object.values(PORTRAITS).filter(p => p.category === category);
}

/**
 * Check if a portrait's unlock condition is met
 * @param {string} portraitId - Portrait ID
 * @param {Object} saveData - Player save data
 * @returns {boolean} True if unlocked
 */
export function checkPortraitUnlockCondition(portraitId, saveData) {
    const portrait = PORTRAITS[portraitId];
    if (!portrait) return false;

    const condition = portrait.unlockCondition;

    switch (condition.type) {
        case 'default':
            return true;

        case 'level':
            // Calculate level from XP
            const level = Math.floor(Math.sqrt((saveData.totalXP || 0) / 100)) + 1;
            return level >= condition.value;

        case 'character':
            return saveData.unlocks?.characters?.includes(condition.value) || false;

        case 'achievement':
            return saveData.achievements?.includes(condition.value) || false;

        case 'stat':
            const statValue = saveData.stats?.[condition.stat] || 0;
            if (condition.comparison === 'lessThan') {
                // For speedrunner: needs to have a valid time AND be under the threshold
                return statValue > 0 && statValue < condition.value;
            }
            return statValue >= condition.value;

        default:
            return false;
    }
}

/**
 * Get unlock progress for a portrait
 * @param {string} portraitId - Portrait ID
 * @param {Object} saveData - Player save data
 * @returns {Object} Progress info with current, required, and percentage
 */
export function getPortraitUnlockProgress(portraitId, saveData) {
    const portrait = PORTRAITS[portraitId];
    if (!portrait) return { current: 0, required: 1, percentage: 0 };

    const condition = portrait.unlockCondition;

    switch (condition.type) {
        case 'default':
            return { current: 1, required: 1, percentage: 1 };

        case 'level':
            const level = Math.floor(Math.sqrt((saveData.totalXP || 0) / 100)) + 1;
            return {
                current: level,
                required: condition.value,
                percentage: Math.min(1, level / condition.value)
            };

        case 'character':
            const hasChar = saveData.unlocks?.characters?.includes(condition.value) || false;
            return {
                current: hasChar ? 1 : 0,
                required: 1,
                percentage: hasChar ? 1 : 0
            };

        case 'achievement':
            const hasAch = saveData.achievements?.includes(condition.value) || false;
            return {
                current: hasAch ? 1 : 0,
                required: 1,
                percentage: hasAch ? 1 : 0
            };

        case 'stat':
            const statValue = saveData.stats?.[condition.stat] || 0;
            if (condition.comparison === 'lessThan') {
                // Can't really show progress for "less than" conditions
                return {
                    current: statValue || 'N/A',
                    required: `< ${condition.value}`,
                    percentage: statValue > 0 && statValue < condition.value ? 1 : 0
                };
            }
            return {
                current: statValue,
                required: condition.value,
                percentage: Math.min(1, statValue / condition.value)
            };

        default:
            return { current: 0, required: 1, percentage: 0 };
    }
}

/**
 * Get description of unlock condition
 * @param {string} portraitId - Portrait ID
 * @returns {string} Human-readable unlock condition
 */
export function getPortraitUnlockDescription(portraitId) {
    const portrait = PORTRAITS[portraitId];
    if (!portrait) return '未知';

    const condition = portrait.unlockCondition;

    switch (condition.type) {
        case 'default':
            return '默认解锁';
        case 'level':
            return `达到等级 ${condition.value}`;
        case 'character':
            return `解锁 ${condition.value.charAt(0).toUpperCase() + condition.value.slice(1)} 角色`;
        case 'achievement':
            return `完成「${condition.value}」成就`;
        case 'stat':
            const statNames = {
                totalBossesKilled: '击杀Boss数',
                totalRuns: '完成局数',
                totalCurrencyEarned: '获得银币数',
                totalEnemiesKilled: '击杀敌人数',
                fastestRunTime: '秒通关'
            };
            const statName = statNames[condition.stat] || condition.stat;
            if (condition.comparison === 'lessThan') {
                return `${Math.floor(condition.value / 60)}分钟内完成一局`;
            }
            return `${condition.value.toLocaleString()} ${statName}`;
        default:
            return '未知条件';
    }
}
