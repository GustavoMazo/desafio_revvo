<?php
require_once 'app/services/CursoService.php';

header('Content-Type: application/json'); // Define o cabeçalho para JSON

class CursoController {
    private $cursoService;

    public function __construct() {
        $this->cursoService = new CursoService();
    }

    // Listar todos os cursos
    public function index() {
        echo json_encode($this->cursoService->listarCursos());
    }

    // Exibir um curso específico
    public function show($id) {
        echo json_encode($this->cursoService->buscarCursoPorId($id));
    }

    // Criar um novo curso
    public function store() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $data = json_decode(file_get_contents('php://input'), true);

            $titulo = $data['titulo'] ?? '';
            $descricao = $data['descricao'] ?? '';
            $imagem = $data['imagem'] ?? '';
            $link = $data['link'] ?? '';

            if (empty($titulo) || empty($descricao) || empty($imagem) || empty($link)) {
                http_response_code(400);
                echo json_encode(['error' => 'Todos os campos são obrigatórios!']);
                return;
            }

            $this->cursoService->criarCurso($titulo, $descricao, $imagem, $link);
            echo json_encode(['message' => 'Curso criado com sucesso']);
        }
    }

    // Atualizar um curso
    public function update($id) {
        if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
            $data = json_decode(file_get_contents('php://input'), true);

            $titulo = $data['titulo'] ?? '';
            $descricao = $data['descricao'] ?? '';
            $imagem = $data['imagem'] ?? '';
            $link = $data['link'] ?? '';

            if (empty($titulo) || empty($descricao) || empty($imagem) || empty($link)) {
                http_response_code(400);
                echo json_encode(['error' => 'Todos os campos são obrigatórios!']);
                return;
            }

            $this->cursoService->atualizarCurso($id, $titulo, $descricao, $imagem, $link);
            echo json_encode(['message' => 'Curso atualizado com sucesso']);
        }
    }

    // Excluir um curso
    public function delete($id) {
        if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
            $this->cursoService->excluirCurso($id);
            echo json_encode(['message' => 'Curso excluído com sucesso']);
        }
    }
}

// Roteamento baseado na requisição AJAX
$controller = new CursoController();
$method = $_SERVER['REQUEST_METHOD'];
$action = $_GET['action'] ?? 'index';
$id = $_GET['id'] ?? null;

if (method_exists($controller, $action)) {
    if ($id) {
        $controller->$action($id);
    } else {
        $controller->$action();
    }
} else {
    http_response_code(404);
    echo json_encode(["error" => "Página não encontrada."]);
}
?>