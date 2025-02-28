<?php

require_once __DIR__.'/../models/database.php';

class CursoService {
    private $db;

    public function __construct() {
        $this->db = new Database();
    }

    public function criarCurso($titulo, $descricao, $imagem, $link) {

        $sql = "INSERT INTO cursos (titulo, descricao, imagem, link) VALUES (:titulo, :descricao, :imagem, :link)";
        return $this->db->execute($sql, [
            'titulo' => $titulo,
            'descricao' => $descricao,
            'imagem' => $imagem,
            'link' => $link
        ]);
    }

    public function listarCursos() {
        $sql = "SELECT * FROM cursos";
        return $this->db->fetchAll($sql);
    }

    public function buscarCursoPorId($id) {
        $sql = "SELECT * FROM cursos WHERE id = :id";
        return $this->db->fetch($sql, ['id' => $id]);
    }

    public function atualizarCurso($id, $titulo, $descricao, $imagem, $link) {

        $sql = "UPDATE cursos SET titulo = :titulo, descricao = :descricao, imagem = :imagem, link = :link WHERE id = :id";
        return $this->db->execute($sql, [
            'id' => $id,
            'titulo' => $titulo,
            'descricao' => $descricao,
            'imagem' => $imagem,
            'link' => $link
        ]);
    }

    public function excluirCurso($id) {
        $sql = "DELETE FROM cursos WHERE id = :id";
        return $this->db->execute($sql, ['id' => $id]);
    }
}
?>
