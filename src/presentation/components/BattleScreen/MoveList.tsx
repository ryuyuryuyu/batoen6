import React from 'react';
import type { BattlePokemon } from '../../../domain/models/BattlePokemon';
import './MoveList.css';

interface MoveListProps {
  pokemon: BattlePokemon;
}

/**
 * 技リストコンポーネント
 * ポケモンの6つの技を表示
 */
export const MoveList: React.FC<MoveListProps> = ({ pokemon }) => {
  // 技を動的に取得（技数可変対応）
  const moves = Object.entries(pokemon.moveset)
    .filter(([_, desc]) => typeof desc === 'string' && desc.trim() !== "")
    .map(([key, description]) => ({
      number: key,
      description: description as string
    }));

  return (
    <div className="move-list">
      {moves.map(move => (
        <div key={move.number} className="move-item">
          <span className="move-number">{move.number}</span>
          <div className="move-description">
            {move.description}
          </div>
        </div>
      ))}
    </div>
  );
};