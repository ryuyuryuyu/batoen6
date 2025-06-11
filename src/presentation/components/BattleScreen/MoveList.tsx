// import React from 'react';
// import type { BattlePokemon } from '../../../domain/models/BattlePokemon';
// import './MoveList.css';

// interface MoveListProps {
//   pokemon: BattlePokemon;
// }

// /**

// 技リストコンポーネント
// ポケモンが保持している技をすべて表示する
// */
// export const MoveList: React.FC<MoveListProps> = ({ pokemon }) => {
// /* 技数に応じて 1〜n の配列を生成 */
// const moves = Array.from({ length: pokemon.moves.length }, (_, i) => ({
//     number: i + 1, // 表示用番号（1,2,3...）
//     description: pokemon.getMove(i + 1), // 技の説明
//   }));

//   return (
//     <div className="move-list">
//       {moves.map(move => (
//         <div key={move.number} className="move-item">
//           <span className="move-number">{move.number}</span>
//           <div className="move-description">{move.description}</div>
//         </div>
//       ))}
//     </div>
//   );
// };

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
  const moves = [1, 2, 3, 4, 5, 6].map(num => ({
    number: num,
    description: pokemon.getMove(num)
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