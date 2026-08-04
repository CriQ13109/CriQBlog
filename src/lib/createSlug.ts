// Adapted from https://equk.co.uk/2023/02/02/generating-slug-from-title-in-astro/

import { GENERATE_SLUG_FROM_TITLE } from '../config'

export default function createSlug(title: string = '', staticSlug: string = ''): string {
  // 1. GENERATE_SLUG_FROM_TITLE이 false인 경우 파일명(staticSlug) 사용
  if (!GENERATE_SLUG_FROM_TITLE) {
    return staticSlug || 'post';
  }

  // 2. 제목 기반 slug 생성 (한글, 영문, 숫자, 하이픈 유지)
  const slugFromTitle = (title || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-가-힣]/g, '')
    .replace(/^-+|-+$/g, '');

  // 3. ✨ [핵심 예외 처리] 
  // 만약 제목 변환 결과가 빈 값("")이면 staticSlug(파일명)를 쓰고, 
  // 그것마저 빈 값이면 최후의 보루로 'post'를 반환하여 절대 ""가 되지 않게 방어합니다.
  return slugFromTitle || staticSlug || 'post';
}