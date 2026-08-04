// src/lib/createSlug.ts
import { GENERATE_SLUG_FROM_TITLE } from '../config'

export default function createSlug(title: string = '', staticSlug: string = ''): string {
  if (!GENERATE_SLUG_FROM_TITLE) {
    return staticSlug || 'post';
  }

  // 한글, 영문, 숫자, 하이픈만 남기고 공백은 '-'로 변경
  const slugFromTitle = (title || '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-가-힣]/g, '')
    .replace(/^-+|-+$/g, '');

  return slugFromTitle || staticSlug || 'post';
}