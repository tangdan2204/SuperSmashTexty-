// Upgrade system - handles upgrade definitions and application
import { isUpgradeValidForWeapon, getWeaponDefinition, WEAPON_DEFINITIONS } from '../data/weapons.js';

// Upgrade stack limits
export const UPGRADE_STACK_LIMITS = {
    damage: 10, // 10 stacks = 250% total (25% per stack)
    fireRate: 10, // 10 stacks = ~620% total (20% per stack, multiplicative)
    speed: 10, // 10 stacks = ~405% total (15% per stack, multiplicative)
    health: 10, // 10 stacks = +200 HP total (20 per stack)
    projectileSpeed: 10, // 10 stacks = ~931% total (25% per stack, multiplicative)
    xpGain: 10, // 10 stacks = +150% total (15% per stack)
    pickupRadius: 10, // 10 stacks = ~5766% total (50% per stack, multiplicative)
    multiShot: 5, // 5 stacks = +5 projectiles total
    piercing: 5, // 5 stacks = +5 penetration total
    obstaclePiercing: 5, // 5 stacks = +5 obstacle penetration total
    critChance: 10, // 10 stacks = +100% crit chance total (10% per stack)
    critDamage: 10, // 10 stacks = +500% crit damage total (50% per stack)
    spreadShot: 5, // 5 stacks = +150° spread total (30° per stack)
    pelletCount: 5, // 5 stacks = +5 pellets total
    range: 5, // 5 stacks = ~305% total (25% per stack, multiplicative)
    dot: 10, // 10 stacks = +250% DoT total (25% per stack)
    orbitalCount: 5, // 5 stacks = +5 orbs total
    orbitalSpeed: 10, // 10 stacks = ~5766% total (50% per stack, multiplicative)
    orbitalRadius: 10, // 10 stacks = ~619% total (20% per stack, multiplicative)
    explosionRadius: 10, // 10 stacks = ~931% total (25% per stack, multiplicative)
    explosionDamage: 10, // 10 stacks = ~931% total (25% per stack, multiplicative)
    chainJumps: 5, // 5 stacks = +5 jumps total
    chainRange: 10, // 10 stacks = ~931% total (25% per stack, multiplicative)
    chainDamage: 10, // 10 stacks = -100% damage reduction (minimum 5% per jump)
    defense: 10, // 10 stacks = +20 damage reduction total (2 per stack)
    // New upgrades
    lifesteal: 5, // 5 stacks = 10% lifesteal total (2% per stack)
    dodgeChance: 5, // 5 stacks = 25% dodge chance total (5% per stack)
    thorns: 5, // 5 stacks = 75% reflected damage total (15% per stack)
    aoeSize: 10, // 10 stacks = +150% AoE size total (15% per stack)
    knockback: 5, // 5 stacks = +100% knockback total (20% per stack)
    magnetRange: 10, // 10 stacks = +250% pickup radius total (25% per stack)
    invulnTime: 5, // 5 stacks = +0.75s invuln total (0.15s per stack)
    moveDamage: 5, // 5 stacks = +10% damage per speed stack (2% per stack)
    lowHealthDmg: 5, // 5 stacks = +25% damage per 10% missing HP (5% per stack)
    killSpeed: 5 // 5 stacks = +15% speed on kill for 3s (3% per stack)
};

// Basic upgrade definitions
// Each upgrade can specify which weapons it's valid for
export const UPGRADES = {
    damage: {
        name: '伤害提升',
        icon: '⚔',
        description: '+25%伤害',
        category: 'weapon',
        upgradeCategory: 'damage',
        maxStacks: 10,
        getDescription: (stacks) => `+25%伤害${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.damage})` : ''}`,
        apply: (player) => {
            // Stackable: recalculate from base damage
            const stacks = player.upgradeStacks?.damage || 0;
            const baseDamage = player.baseProjectileDamage || player.weaponDef?.baseDamage || 10;
            const multiplier = Math.pow(1.25, stacks);
            player.projectileDamage = Math.floor(baseDamage * multiplier);
        }
    },
    fireRate: {
        name: '射速提升',
        icon: '⟫',
        description: '+20%射速',
        category: 'weapon',
        upgradeCategory: 'fireRate',
        maxStacks: 10,
        getDescription: (stacks) => `+20%射速${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.fireRate})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.fireRate || 0;
            const baseFireRate = player.baseFireRate || player.weaponDef?.fireRate || 1.5;
            const multiplier = Math.pow(1.2, stacks);
            player.fireRate = baseFireRate * multiplier;
        }
    },
    speed: {
        name: '移动加速',
        icon: '☄',
        description: '+15%移速',
        category: 'passive',
        maxStacks: 10,
        getDescription: (stacks) => `+15%移速${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.speed})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.speed || 0;
            const baseSpeed = player.characterData?.stats?.speed || 150;
            const multiplier = Math.pow(1.15, stacks);
            player.speed = Math.floor(baseSpeed * multiplier);
            player.originalSpeed = player.speed;
        }
    },
    health: {
        name: '生命上限',
        icon: '♥',
        description: '+20最大生命值',
        category: 'passive',
        maxStacks: 10,
        getDescription: (stacks) => `+20最大生命值${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.health})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.health || 0;
            const baseHealth = player.characterData?.stats?.health || 100;
            const bonusHP = stacks * 20;
            const oldMaxHealth = player.maxHealth;
            player.maxHealth = baseHealth + bonusHP;
            // Heal the difference
            const hpDiff = player.maxHealth - oldMaxHealth;
            if (hpDiff > 0) {
                player.setHP(player.hp() + hpDiff);
            }
        }
    },
    projectileSpeed: {
        name: '弹速提升',
        icon: '➤',
        description: '+25%弹速',
        category: 'weapon',
        maxStacks: 10,
        getDescription: (stacks) => `+25%弹速${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.projectileSpeed})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.projectileSpeed || 0;
            const baseSpeed = player.baseProjectileSpeed || player.weaponDef?.projectileSpeed || 300;
            const multiplier = Math.pow(1.25, stacks);
            player.projectileSpeed = Math.floor(baseSpeed * multiplier);
        }
    },
    xpGain: {
        name: '经验加成',
        icon: '★',
        description: '+15%经验获取',
        category: 'passive',
        maxStacks: 10,
        getDescription: (stacks) => `+15%经验获取${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.xpGain})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.xpGain || 0;
            const baseMultiplier = player.characterData?.ability === 'xpBoost' ? 1.1 : 1.0;
            player.xpMultiplier = baseMultiplier + (stacks * 0.15);
        }
    },
    pickupRadius: {
        name: '拾取范围',
        icon: '◐',
        description: '+50%拾取范围',
        category: 'passive',
        maxStacks: 10,
        getDescription: (stacks) => `+50%拾取范围${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.pickupRadius})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.pickupRadius || 0;
            const baseRadius = 30;
            const multiplier = Math.pow(1.5, stacks);
            player.pickupRadius = Math.floor(baseRadius * multiplier);
        }
    },
    multiShot: {
        name: '多重射击',
        icon: '⋮',
        description: '额外发射1颗子弹',
        category: 'weapon',
        upgradeCategory: 'multiShot',
        validWeapons: ['pistol', 'smg', 'sniper'],
        maxStacks: 5,
        getDescription: (stacks) => `额外发射1颗子弹${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.multiShot})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.multiShot || 0;
            const baseCount = player.weaponDef?.projectileCount || 1;
            player.projectileCount = baseCount + stacks;
        }
    },
    piercing: {
        name: '穿透弹',
        icon: '⇉',
        description: '子弹额外穿透1个敌人',
        category: 'weapon',
        upgradeCategory: 'piercing',
        maxStacks: 5,
        getDescription: (stacks) => `子弹额外穿透1个敌人${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.piercing})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.piercing || 0;
            const basePiercing = player.weaponDef?.piercing || 0;
            player.piercing = basePiercing + stacks;
        }
    },
    obstaclePiercing: {
        name: '障碍穿透',
        icon: '⊡',
        description: '+1障碍物穿透',
        category: 'weapon',
        maxStacks: 5,
        getDescription: (stacks) => `+1障碍物穿透${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.obstaclePiercing})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.obstaclePiercing || 0;
            const baseObstaclePiercing = player.weaponDef?.obstaclePiercing || 0;
            player.obstaclePiercing = baseObstaclePiercing + stacks;
        }
    },
    critChance: {
        name: '暴击',
        icon: '◆',
        description: '+10%暴击率',
        category: 'weapon',
        upgradeCategory: 'crit',
        maxStacks: 10,
        getDescription: (stacks) => `+10%暴击率${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.critChance})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.critChance || 0;
            const baseCritChance = player.weaponDef?.critChance || 0.05;
            let finalCritChance = baseCritChance + (stacks * 0.1);
            // Apply character bonus if applicable
            if (player.characterData?.ability === 'critBoost') {
                finalCritChance *= 1.5;
            }
            player.critChance = finalCritChance;
        }
    },
    critDamage: {
        name: '暴击伤害',
        icon: '◈',
        description: '+50%暴击伤害',
        category: 'weapon',
        upgradeCategory: 'crit',
        maxStacks: 10,
        getDescription: (stacks) => `+50%暴击伤害${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.critDamage})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.critDamage || 0;
            const baseCritDamage = player.weaponDef?.critDamage || 2.0;
            let finalCritDamage = baseCritDamage + (stacks * 0.5);
            // Apply character bonus if applicable
            if (player.characterData?.ability === 'critBoost') {
                finalCritDamage *= 1.25;
            }
            player.critDamage = finalCritDamage;
        }
    },
    spreadShot: {
        name: '散射',
        icon: '⋰',
        description: '+30°散射角度',
        category: 'weapon',
        upgradeCategory: 'spread',
        validWeapons: ['shotgun'], // Only shotgun has 'spread' in upgradeCategories
        maxStacks: 5,
        getDescription: (stacks) => `+30°散射角度${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.spreadShot})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.spreadShot || 0;
            const baseSpread = player.weaponDef?.spreadAngle || 0;
            player.spreadAngle = baseSpread + (stacks * 30);
        }
    },
    pelletCount: {
        name: '弹丸增加',
        icon: '⁘',
        description: '散射+1颗弹丸',
        category: 'weapon',
        upgradeCategory: 'pelletCount',
        validWeapons: ['shotgun'],
        maxStacks: 5,
        getDescription: (stacks) => `散射+1颗弹丸${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.pelletCount})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.pelletCount || 0;
            const baseCount = player.weaponDef?.projectileCount || 3;
            player.projectileCount = baseCount + stacks;
        }
    },
    range: {
        name: '射程延伸',
        icon: '↔',
        description: '+25%武器射程',
        category: 'weapon',
        upgradeCategory: 'range',
        validWeapons: ['sniper', 'flamethrower', 'explosive'], // All weapons with 'range' in upgradeCategories
        maxStacks: 5,
        getDescription: (stacks) => `+25%武器射程${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.range})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.range || 0;
            const baseRange = player.weaponDef?.range || 600;
            const multiplier = Math.pow(1.25, stacks);
            player.weaponRange = Math.floor(baseRange * multiplier);
        }
    },
    dot: {
        name: '灼烧伤害',
        icon: '♨',
        description: '+25%灼烧伤害（每秒伤害）',
        category: 'weapon',
        upgradeCategory: 'dot',
        validWeapons: ['flamethrower'],
        maxStacks: 10,
        getDescription: (stacks) => `+25%灼烧伤害${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.dot})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.dot || 0;
            const baseMultiplier = player.characterData?.ability === 'fireDot' ? 1.25 : 1.0;
            player.fireDotMultiplier = baseMultiplier + (stacks * 0.25);
        }
    },
    orbitalCount: {
        name: '额外轨道球',
        icon: '◉',
        description: '+1个轨道球',
        category: 'weapon',
        upgradeCategory: 'orbitalCount',
        validWeapons: ['orbital'],
        maxStacks: 5,
        getDescription: (stacks) => `+1个轨道球${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.orbitalCount})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.orbitalCount || 0;
            const baseCount = player.weaponDef?.projectileCount || 1;
            player.projectileCount = baseCount + stacks;
            // Reinitialize orbital weapons if needed
            if (player.weaponKey === 'orbital' && player.orbitalOrbs) {
                // Mark for reinitialization
                player.orbitalNeedsReinit = true;
            }
        }
    },
    orbitalSpeed: {
        name: '轨道加速',
        icon: '⟲',
        description: '+50%轨道球转速',
        category: 'weapon',
        upgradeCategory: 'orbitalSpeed',
        validWeapons: ['orbital'],
        maxStacks: 10,
        getDescription: (stacks) => `+50%轨道球转速${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.orbitalSpeed})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.orbitalSpeed || 0;
            const baseSpeed = player.weaponDef?.rotationSpeed || 180;
            const multiplier = Math.pow(1.5, stacks);
            player.rotationSpeed = baseSpeed * multiplier;
        }
    },
    orbitalRadius: {
        name: '轨道扩展',
        icon: '○',
        description: '+20%轨道球半径',
        category: 'weapon',
        upgradeCategory: 'orbitalRadius',
        validWeapons: ['orbital'],
        maxStacks: 10,
        getDescription: (stacks) => `+20%轨道球半径${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.orbitalRadius})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.orbitalRadius || 0;
            const baseRadius = player.weaponDef?.orbitRadius || 45;
            const multiplier = Math.pow(1.2, stacks);
            player.orbitRadius = Math.floor(baseRadius * multiplier);
        }
    },
    explosionRadius: {
        name: '扩大爆炸',
        icon: '◎',
        description: '+25%爆炸范围',
        category: 'weapon',
        upgradeCategory: 'explosionRadius',
        validWeapons: ['explosive'],
        maxStacks: 10,
        getDescription: (stacks) => `+25%爆炸范围${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.explosionRadius})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.explosionRadius || 0;
            const baseRadius = player.weaponDef?.explosionRadius || 50;
            const multiplier = Math.pow(1.25, stacks);
            player.explosionRadius = Math.floor(baseRadius * multiplier);
        }
    },
    explosionDamage: {
        name: '爆炸威力',
        icon: '☢',
        description: '+25%爆炸伤害',
        category: 'weapon',
        upgradeCategory: 'explosionDamage',
        validWeapons: ['explosive'],
        maxStacks: 10,
        getDescription: (stacks) => `+25%爆炸伤害${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.explosionDamage})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.explosionDamage || 0;
            const baseDamage = player.weaponDef?.explosionDamage || 15;
            const multiplier = Math.pow(1.25, stacks);
            player.explosionDamage = Math.floor(baseDamage * multiplier);
        }
    },
    chainJumps: {
        name: '连锁增加',
        icon: '⚡',
        description: '+1次闪电跳跃',
        category: 'weapon',
        upgradeCategory: 'chainJumps',
        validWeapons: ['chainLightning'],
        maxStacks: 5,
        getDescription: (stacks) => `+1次闪电跳跃${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.chainJumps})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.chainJumps || 0;
            const baseJumps = player.weaponDef?.maxJumps || 3;
            player.maxJumps = baseJumps + stacks;
        }
    },
    chainRange: {
        name: '连锁延伸',
        icon: '⌁',
        description: '+25%闪电跳跃距离',
        category: 'weapon',
        upgradeCategory: 'chainRange',
        validWeapons: ['chainLightning'],
        maxStacks: 10,
        getDescription: (stacks) => `+25%闪电跳跃距离${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.chainRange})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.chainRange || 0;
            const baseRange = player.weaponDef?.chainRange || 70;
            const multiplier = Math.pow(1.25, stacks);
            player.chainRange = Math.floor(baseRange * multiplier);
        }
    },
    chainDamage: {
        name: '连锁威力',
        icon: '⚡',
        description: '-10%连锁衰减',
        category: 'weapon',
        upgradeCategory: 'chainDamage',
        validWeapons: ['chainLightning'],
        maxStacks: 10,
        getDescription: (stacks) => `-10%连锁衰减${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.chainDamage})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.chainDamage || 0;
            const baseReduction = player.weaponDef?.chainDamageReduction || 0.15;
            // Reduce damage reduction (so damage stays higher)
            player.chainDamageReduction = Math.max(0.05, baseReduction - (stacks * 0.1));
        }
    },
    defense: {
        name: '护甲',
        icon: '▲',
        description: '+2护甲（减少固定伤害）',
        category: 'passive',
        maxStacks: 10,
        getDescription: (stacks) => `+2护甲${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.defense})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.defense || 0;
            const baseDefense = player.characterData?.ability === 'tankStats' ? 0.15 : 0;
            player.defense = baseDefense + (stacks * 2);
        }
    },

    // ========================================
    // NEW UPGRADES
    // ========================================

    lifesteal: {
        name: '生命汲取',
        icon: '♡',
        description: '击杀敌人恢复生命值',
        category: 'passive',
        maxStacks: 5,
        getDescription: (stacks) => `恢复${(stacks || 1) * 2}%造成伤害的生命值${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.lifesteal})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.lifesteal || 0;
            player.lifestealPercent = stacks * 0.02; // 2% per stack
        }
    },
    dodgeChance: {
        name: '闪避',
        icon: '⚡',
        description: '+5%闪避率',
        category: 'passive',
        maxStacks: 5,
        getDescription: (stacks) => `+${(stacks || 1) * 5}%闪避率${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.dodgeChance})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.dodgeChance || 0;
            // Add to existing dodge chance (Scout has base 10%)
            const baseDodge = player.characterData?.ability === 'dodgeChance' ? 0.1 : 0;
            player.dodgeChance = baseDodge + (stacks * 0.05); // 5% per stack
        }
    },
    thorns: {
        name: '荆棘',
        icon: '⌂',
        description: '受击时反弹15%伤害',
        category: 'passive',
        maxStacks: 5,
        getDescription: (stacks) => `反弹${(stacks || 1) * 15}%伤害${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.thorns})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.thorns || 0;
            player.thornsPercent = stacks * 0.15; // 15% per stack
        }
    },
    aoeSize: {
        name: '爆破范围',
        icon: '◎',
        description: '+15%范围效果',
        category: 'weapon',
        upgradeCategory: 'explosionRadius',
        maxStacks: 10,
        getDescription: (stacks) => `+${(stacks || 1) * 15}%范围效果${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.aoeSize})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.aoeSize || 0;
            player.aoeSizeMultiplier = 1 + (stacks * 0.15); // 15% per stack
            // Also update explosion radius if player has explosive weapon
            if (player.explosionRadius) {
                const baseRadius = player.weaponDef?.explosionRadius || 50;
                player.explosionRadius = Math.floor(baseRadius * player.aoeSizeMultiplier);
            }
        }
    },
    knockback: {
        name: '冲击力',
        icon: '⇒',
        description: '+20%击退',
        category: 'weapon',
        maxStacks: 5,
        getDescription: (stacks) => `+${(stacks || 1) * 20}%击退${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.knockback})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.knockback || 0;
            player.knockbackMultiplier = 1 + (stacks * 0.2); // 20% per stack
        }
    },
    magnetRange: {
        name: '寻宝猎人',
        icon: '◐',
        description: '+25%拾取范围',
        category: 'passive',
        maxStacks: 10,
        getDescription: (stacks) => `+${(stacks || 1) * 25}%拾取范围${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.magnetRange})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.magnetRange || 0;
            const baseRadius = 30;
            // Additive with pickupRadius upgrade
            const pickupStacks = player.upgradeStacks?.pickupRadius || 0;
            const pickupMultiplier = Math.pow(1.5, pickupStacks);
            player.pickupRadius = Math.floor(baseRadius * pickupMultiplier * (1 + stacks * 0.25));
        }
    },
    invulnTime: {
        name: '铁皮',
        icon: '◇',
        description: '+0.15秒无敌帧',
        category: 'passive',
        maxStacks: 5,
        getDescription: (stacks) => `+${((stacks || 1) * 0.15).toFixed(2)}秒无敌帧${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.invulnTime})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.invulnTime || 0;
            const baseDuration = 1.0; // Base invulnerability duration
            player.invulnerableDuration = baseDuration + (stacks * 0.15); // 0.15s per stack
        }
    },
    moveDamage: {
        name: '势如破竹',
        icon: '➜',
        description: '移动时积累伤害加成',
        category: 'passive',
        maxStacks: 5,
        getDescription: (stacks) => `+${(stacks || 1) * 2}%伤害/速度层${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.moveDamage})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.moveDamage || 0;
            player.moveDamageBonus = stacks * 0.02; // 2% per stack
            // Damage bonus is applied dynamically based on speed stacks in combat
        }
    },
    lowHealthDmg: {
        name: '绝境求生',
        icon: '☠',
        description: '生命值越低伤害越高',
        category: 'passive',
        maxStacks: 5,
        getDescription: (stacks) => `+${(stacks || 1) * 5}%伤害/每损失10%生命${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.lowHealthDmg})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.lowHealthDmg || 0;
            player.lowHealthDmgBonus = stacks * 0.05; // 5% per stack per 10% missing HP
            // Damage bonus is applied dynamically based on HP percentage in combat
        }
    },
    killSpeed: {
        name: '嗜血',
        icon: '⚔',
        description: '击杀后短时间内攻速提升',
        category: 'passive',
        maxStacks: 5,
        getDescription: (stacks) => `击杀后+${(stacks || 1) * 3}%速度持续3秒${stacks > 0 ? ` (${stacks}/${UPGRADE_STACK_LIMITS.killSpeed})` : ''}`,
        apply: (player) => {
            const stacks = player.upgradeStacks?.killSpeed || 0;
            player.killSpeedBonus = stacks * 0.03; // 3% per stack
            player.killSpeedDuration = 3.0; // 3 seconds
            player.killSpeedStacks = 0; // Active kill stacks (managed in combat)
            player.killSpeedTimer = 0; // Timer for speed buff decay
        }
    }
};

// Check if upgrade is valid for player
function isUpgradeValidForPlayer(upgrade, player) {
    // Passive upgrades
    if (upgrade.category === 'passive') {
        // Check stack limit
        const stacks = player.upgradeStacks?.[upgrade.key] || 0;
        const maxStacks = upgrade.maxStacks || UPGRADE_STACK_LIMITS[upgrade.key] || 10;
        if (stacks >= maxStacks) {
            return false;
        }
        return true;
    }

    // Weapon stat upgrades
    if (upgrade.category === 'weapon') {
        // Check stack limit
        const stacks = player.upgradeStacks?.[upgrade.key] || 0;
        const maxStacks = upgrade.maxStacks || UPGRADE_STACK_LIMITS[upgrade.key] || 10;
        if (stacks >= maxStacks) {
            return false;
        }

        // Check weapon validity - only show upgrades for character's starting weapon
        // (not powerup weapons, since those are temporary)
        const startingWeapon = player.characterData?.weapon || player.weaponKey || 'pistol';

        if (upgrade.validWeapons) {
            // Must match starting weapon exactly
            return upgrade.validWeapons.includes(startingWeapon);
        }

        if (upgrade.upgradeCategory) {
            return isUpgradeValidForWeapon(startingWeapon, upgrade.upgradeCategory);
        }

        return true;
    }

    return true;
}

// Get random upgrades for draft (weapon-aware)
// @param {number} count - Number of upgrades to return
// @param {Object} player - Player object to filter valid upgrades
// @param {SeededRandom} rng - Optional seeded RNG for multiplayer synchronization
export function getRandomUpgrades(count = 3, player = null, rng = null) {
    const upgradeKeys = Object.keys(UPGRADES);

    // Map upgrade keys to full upgrade objects
    let allOptions = upgradeKeys.map(key => ({ key, ...UPGRADES[key], type: 'upgrade' }));

    // Filter based on player state
    let validOptions = allOptions;
    if (player) {
        validOptions = allOptions.filter(option => isUpgradeValidForPlayer(option, player));
    }

    // If not enough valid options, fall back to all options
    if (validOptions.length < count) {
        validOptions = allOptions;
    }

    const selected = [];
    const used = new Set();

    while (selected.length < count && selected.length < validOptions.length) {
        // Use seeded RNG if provided (for multiplayer sync), otherwise Math.random()
        const randomIndex = rng
            ? rng.range(0, validOptions.length)
            : Math.floor(Math.random() * validOptions.length);
        const option = validOptions[randomIndex];
        if (!used.has(option.key)) {
            used.add(option.key);
            selected.push(option);
        }
    }

    return selected;
}

// Apply upgrade to player
export function applyUpgrade(player, upgradeKey) {
    // Get the upgrade
    const upgrade = UPGRADES[upgradeKey];
    if (!upgrade) return;
    
    // Track upgrade
    if (upgrade.category === 'passive') {
        if (!player.passiveUpgrades.includes(upgradeKey)) {
            player.passiveUpgrades.push(upgradeKey);
        }
    }
    
    // Increment stack count
    if (!player.upgradeStacks) {
        player.upgradeStacks = {};
    }
    player.upgradeStacks[upgradeKey] = (player.upgradeStacks[upgradeKey] || 0) + 1;
    
    // Apply upgrade (will recalculate from base values)
    recalculateAllUpgrades(player);
}

// Recalculate all upgrades from base values
export function recalculateAllUpgrades(player) {
    // Apply all upgrades in order
    Object.keys(UPGRADES).forEach(key => {
        if (player.upgradeStacks && player.upgradeStacks[key] > 0) {
            UPGRADES[key].apply(player);
        }
    });
}

// Get upgrade description with stack count
export function getUpgradeDescription(upgrade, player) {
    if (!upgrade) return '';
    
    if (upgrade.getDescription) {
        const stacks = player?.upgradeStacks?.[upgrade.key] || 0;
        return upgrade.getDescription(stacks);
    }
    
    if (upgrade.weaponKey) {
        return upgrade.getDescription ? upgrade.getDescription() : upgrade.description;
    }
    
    return upgrade.description;
}
