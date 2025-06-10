import React from 'react';
import './DamageButtons.css';

interface DamageButtonsProps {
  onDamage: (damage: number) => void;
  onHeal: (heal: number) => void;
}

/**
 * ダメージ・回復ボタンコンポーネント
 * ダメージ量・回復量の選択を提供
 */
export const DamageButtons: React.FC<DamageButtonsProps> = ({ onDamage, onHeal }) => {
  const damageValues = [30, 20, 10];
  const healValues = [30, 20, 10];

  return (
    <div className="damage-buttons">
      <div className="damage-grid">
        {damageValues.map(damage => (
          <button
            key={damage}
            className="damage-button"
            onClick={() => onDamage(damage)}
          >
            -{damage}
          </button>
        ))}
      </div>
      <div className="heal-grid">
        {healValues.map(heal => (
          <button
            key={heal}
            className="heal-button"
            onClick={() => onHeal(heal)}
          >
            +{heal}
          </button>
        ))}
      </div>
    </div>
  );
};