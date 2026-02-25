import React from 'react';

type Filter = 'all' | 'active' | 'completed';

interface TodoFiltersProps {
  currentFilter: Filter;
  onFilterChange: (filter: Filter) => void;
  activeCount: number;
}

const TodoFilters: React.FC<TodoFiltersProps> = ({ currentFilter, onFilterChange, activeCount }) => {
  return (
    <div>
      <div className="filter-buttons">
        <button
          className={`btn btn-filter ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => onFilterChange('all')}
        >
          Все
        </button>
        <button
          className={`btn btn-filter ${currentFilter === 'active' ? 'active' : ''}`}
          onClick={() => onFilterChange('active')}
        >
          Активные
        </button>
        <button
          className={`btn btn-filter ${currentFilter === 'completed' ? 'active' : ''}`}
          onClick={() => onFilterChange('completed')}
        >
          Завершённые
        </button>
      </div>
      <p style={{ textAlign: 'center', marginTop: '10px' }}>
        Осталось задач: {activeCount}
      </p>
    </div>
  );
};

export default TodoFilters;