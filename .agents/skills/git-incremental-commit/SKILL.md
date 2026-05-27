---
name: git-incremental-commit
description: Stage changed files in small logical chunks, commit them using the hybrid format "(English category): (Korean message)", and push to the remote repository.
---
# Git Incremental Commit Skill

This skill guides the AI agent to commit and push changes in small, logical chunks using a standardized commit message convention.

## Commit Message Convention
Commit messages must strictly follow the format:
`<English Category>: <Korean Message>`

### Categories (English)
- `feat`: 새로운 기능 추가 (New features)
- `fix`: 버그 수정 (Bug fixes)
- `docs`: 문서 수정/추가 (Documentation changes)
- `style`: 코드 포맷팅, 세미콜론 누락, CSS 스타일 정리 등 (스타일적 변경만 해당)
- `refactor`: 프로덕션 코드 리팩토링 (기능 변화 없음)
- `test`: 테스트 코드 추가 및 리팩토링 (테스트 코드만 해당)
- `chore`: 빌드 업무 수정, 패키지 매니저 설정 등 (빌드/설정 관련)

### Message (Korean)
- 변경 사유와 내용을 명확하고 정중한 한국어로 작성합니다.
- 예시:
  - `feat: 로그인 컴포넌트 추가`
  - `fix: 메인 페이지 레이아웃 어긋남 수정`
  - `docs: AGENTS.md 파일 작성`

## Step-by-Step Workflow

1. **Check Modified Files**:
   Run `git status --porcelain` to see the list of modified/untracked files.

2. **Logical Chunking**:
   - Split the changes into logical chunks (e.g., commit HTML and CSS changes for a component together, or commit files one by one if they represent distinct tasks).
   - Never commit all files in a single generic commit unless they are all part of one small, unified change.

3. **Helper Script Automation (Optional)**:
   You can run the helper script to automate the commits file-by-file:
   ```bash
   node .agents/skills/git-incremental-commit/scripts/commit.js --file <file-path> --category <category> --message "<Korean Message>"
   ```

4. **Manual Commit Execution**:
   For each chunk:
   - Stage the file(s): `git add <file>`
   - Confirm staged changes: `git diff --cached`
   - Commit with the convention: `git commit -m "<Category>: <Korean Message>"`

5. **Push Changes**:
   Once all chunks are committed, push the commits to the remote repository:
   ```bash
   git push
   ```
