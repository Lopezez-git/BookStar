import { HttpInterceptorFn } from '@angular/common/http';

export const AuthInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');

  // Se não há token, segue a requisição normalmente
  if (!token) {
    return next(req);
  }

  // Clona a requisição e adiciona o header Authorization
  const reqClone = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(reqClone);
};
