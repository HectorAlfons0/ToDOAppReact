import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './TodosLoading.css';

function TodosLoading() {
  return (
    <div className="LoadingTodo-container">
      {/* Icono de completar */}
      <span className="LoadingTodo-completeIcon">
        <Skeleton circle={true} height={48} width={48} />
      </span>
      {/* Texto */}
      <p className="LoadingTodo-text">
        <Skeleton width="80%" height={24} />
      </p>
      {/* Icono de eliminar */}
      <span className="LoadingTodo-deleteIcon">
        <Skeleton circle={true} height={48} width={48} />
      </span>
    </div>
  );
}

export { TodosLoading };
